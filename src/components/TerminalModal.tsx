import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Terminal, X, Play, RefreshCw, CheckCircle2, Wifi } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [logs, setLogs] = useState<string[]>([
    'TJKT2-EDGE-ROUTER v7.14 (MikroTik RouterOS)',
    'Connected to gateway 192.168.10.1 (LAB-TJKT2_5GHz)...',
    'Session authenticated: admin@tkjt2-core (ssh-rsa)',
    'Ketik perintah atau gunakan tombol uji cepat di bawah.'
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  if (!isOpen) return null;

  const runCommand = (cmd: string) => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs((prev) => [...prev, `\nadmin@tjkt2-core:~$ ${cmd}`]);

    if (cmd.startsWith('ping')) {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          'PING 192.168.10.1 (192.168.10.1) 56(84) bytes of data.',
          '64 bytes from 192.168.10.1: icmp_seq=1 ttl=64 time=1.12 ms',
          '64 bytes from 192.168.10.1: icmp_seq=2 ttl=64 time=0.98 ms',
          '64 bytes from 192.168.10.1: icmp_seq=3 ttl=64 time=1.04 ms',
          '64 bytes from 192.168.10.1: icmp_seq=4 ttl=64 time=0.92 ms',
          '--- 192.168.10.1 ping statistics ---',
          '4 packets transmitted, 4 received, 0% packet loss, time 3004ms',
          'rtt min/avg/max/mdev = 0.920/1.015/1.120/0.076 ms (EXCELLENT UPTIME)'
        ]);
        setIsRunning(false);
      }, 700);
    } else if (cmd.includes('traceroute')) {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          'traceroute to gateway.smk-alamanah.sch.id (103.144.12.1), 30 hops max, 60 byte packets',
          ' 1  192.168.10.1 (lab-core.lan)  0.892 ms  0.781 ms  0.710 ms',
          ' 2  10.100.1.254 (smk-backbone.id)  2.412 ms  2.341 ms  2.219 ms',
          ' 3  180.252.12.1 (telkom-tier3-bdg.net.id)  6.120 ms  5.980 ms  6.021 ms',
          ' 4  103.144.12.1 (web-portal.smk-alamanah.sch.id)  6.890 ms !Z [SUCCESS]'
        ]);
        setIsRunning(false);
      }, 900);
    } else if (cmd.includes('show ip') || cmd.includes('interface')) {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          'Interface              IP-Address      OK? Method Status                Protocol',
          'ether1-gateway         192.168.10.1    YES manual up                    up      ',
          'ether2-labcom          192.168.20.1    YES manual up                    up      ',
          'vlan10-guru            192.168.30.1    YES manual up                    up      ',
          'wlan1-5ghz             192.168.10.254  YES manual up                    up      '
        ]);
        setIsRunning(false);
      }, 600);
    } else {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          `Hasil eksekusi: Command '${cmd}' diverifikasi pada RouterOS X TJKT 2.`,
          'Status: OK • Jaringan normal, 0 packet loss.'
        ]);
        setIsRunning(false);
      }, 500);
    }
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    runCommand(inputVal.trim());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/65 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#0f172a] rounded-2xl max-w-2xl w-full flex flex-col shadow-2xl border border-[#006194]/40 overflow-hidden text-[#acedff]"
      >
        {/* Titlebar */}
        <div className="p-4 bg-[#1e293b] border-b border-slate-700/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <Terminal className="w-4 h-4 text-[#57dffe]" />
            <span className="font-mono text-xs font-bold text-slate-200">
              Terminal Diagnosa: gateway 192.168.10.1 (X TJKT 2)
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick action buttons */}
        <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center gap-2 font-mono text-[11px]">
          <span className="text-slate-400">Quick Test:</span>
          <button
            type="button"
            onClick={() => runCommand('ping 192.168.10.1')}
            disabled={isRunning}
            className="px-2.5 py-1 rounded bg-[#006194]/30 hover:bg-[#006194]/60 text-[#acedff] border border-[#006194]/50 cursor-pointer disabled:opacity-50 transition-colors"
          >
            ping 192.168.10.1
          </button>
          <button
            type="button"
            onClick={() => runCommand('traceroute smk-alamanah.sch.id')}
            disabled={isRunning}
            className="px-2.5 py-1 rounded bg-[#00687a]/30 hover:bg-[#00687a]/60 text-[#acedff] border border-[#00687a]/50 cursor-pointer disabled:opacity-50 transition-colors"
          >
            traceroute dns
          </button>
          <button
            type="button"
            onClick={() => runCommand('show ip interface brief')}
            disabled={isRunning}
            className="px-2.5 py-1 rounded bg-[#006947]/30 hover:bg-[#006947]/60 text-[#6ffbbe] border border-[#006947]/50 cursor-pointer disabled:opacity-50 transition-colors"
          >
            show interfaces
          </button>
        </div>

        {/* Console logs */}
        <div className="p-4 font-mono text-xs h-72 overflow-y-auto space-y-1 bg-[#090d16] text-[#acedff] leading-relaxed">
          {logs.map((log, index) => (
            <div
              key={index}
              className={`whitespace-pre-wrap ${
                log.includes('EXCELLENT') || log.includes('SUCCESS')
                  ? 'text-[#6ffbbe] font-bold'
                  : log.startsWith('admin@')
                  ? 'text-[#57dffe] font-semibold'
                  : 'text-slate-300'
              }`}
            >
              {log}
            </div>
          ))}
          {isRunning && (
            <div className="flex items-center gap-2 text-[#57dffe] animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Memproses paket jaringan...</span>
            </div>
          )}
          <div ref={logEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 bg-[#1e293b] flex items-center gap-2">
          <span className="font-mono text-xs text-[#57dffe] font-bold">admin@tjkt2:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ketik perintah (contoh: ping 192.168.10.1)..."
            className="flex-1 bg-transparent font-mono text-xs text-white focus:outline-none placeholder:text-slate-500"
          />
          <button
            type="submit"
            disabled={isRunning}
            className="px-3 py-1.5 rounded bg-[#006194] text-white font-mono text-xs font-bold hover:bg-[#007bb9] transition-colors cursor-pointer flex items-center gap-1 disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5" /> Run
          </button>
        </form>
      </motion.div>
    </div>
  );
};
