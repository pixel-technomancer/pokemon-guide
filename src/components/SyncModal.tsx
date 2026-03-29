import React, { useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  onClose: () => void;
  onDataImported: () => void;
}

const SYNC_KEYS = ['pokemon-guide-playthroughs', 'pokemon-guide-active-playthrough'];

export default function SyncModal({ onClose, onDataImported }: Props) {
  const [mode, setMode] = useState<'menu' | 'export' | 'import'>('menu');
  const [code, setCode] = useState('');
  const [importCode, setImportCode] = useState('');
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleExport = () => {
    const data: Record<string, string | null> = {};
    for (const key of SYNC_KEYS) {
      data[key] = localStorage.getItem(key);
    }
    setCode(btoa(JSON.stringify(data)));
    setMode('export');
  };

  const handleImport = () => {
    try {
      const data = JSON.parse(atob(importCode.trim()));
      for (const [key, value] of Object.entries(data)) {
        if (SYNC_KEYS.includes(key)) {
          if (value === null) {
            localStorage.removeItem(key);
          } else {
            localStorage.setItem(key, value as string);
          }
        }
      }
      setImportStatus('success');
      onDataImported();
    } catch {
      setImportStatus('error');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 420 }}>
        <h2>Sync Data</h2>

        {mode === 'menu' && (
          <>
            <p style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 20, lineHeight: 1.6 }}>
              Transfer your playthrough data between devices. Export on one device, then import the code on another.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleExport}>
                Export Data
              </button>
              <button className="btn btn-blue" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMode('import')}>
                Import Data
              </button>
            </div>
          </>
        )}

        {mode === 'export' && (
          <>
            <p style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 12, lineHeight: 1.6 }}>
              Copy this code and paste it on your other device.
            </p>
            <textarea
              readOnly
              value={code}
              style={{
                width: '100%', height: 120, padding: 10, borderRadius: 10,
                border: '2px solid var(--gray-200)', fontFamily: 'monospace', fontSize: 11,
                resize: 'none', wordBreak: 'break-all',
              }}
              onFocus={e => e.target.select()}
            />
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={() => setMode('menu')}>Back</button>
              <button className="btn btn-primary" onClick={handleCopy}>Copy Code</button>
            </div>
          </>
        )}

        {mode === 'import' && (
          <>
            <p style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 12, lineHeight: 1.6 }}>
              Paste the sync code from your other device.
            </p>
            <textarea
              value={importCode}
              onChange={e => { setImportCode(e.target.value); setImportStatus('idle'); }}
              placeholder="Paste sync code here..."
              style={{
                width: '100%', height: 120, padding: 10, borderRadius: 10,
                border: `2px solid ${importStatus === 'error' ? 'var(--red)' : 'var(--gray-200)'}`,
                fontFamily: 'monospace', fontSize: 11, resize: 'none', wordBreak: 'break-all',
              }}
            />
            {importStatus === 'success' && (
              <p style={{ fontSize: 13, color: 'green', fontWeight: 700, marginTop: 8 }}>Data imported successfully!</p>
            )}
            {importStatus === 'error' && (
              <p style={{ fontSize: 13, color: 'var(--red)', fontWeight: 700, marginTop: 8 }}>Invalid sync code. Please try again.</p>
            )}
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={() => setMode('menu')}>Back</button>
              <button className="btn btn-primary" onClick={handleImport} disabled={!importCode.trim()}>
                Import
              </button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
