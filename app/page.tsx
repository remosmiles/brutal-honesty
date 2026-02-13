'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      minHeight: '100vh', 
      padding: '40px 20px', 
      fontFamily: 'monospace',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <h1 style={{ color: '#ff0000', textAlign: 'center', fontSize: '2rem', borderBottom: '2px solid #ff0000', paddingBottom: '10px' }}>
          BRUTALE WAHRHEIT AI
        </h1>
        
        <div style={{ marginTop: '30px', marginBottom: '100px' }}>
          {messages.length === 0 && (
            <p style={{ color: '#444', textAlign: 'center' }}>Trau dich und frag was. Wenn es dumm ist, sag ich's dir.</p>
          )}
          
          {messages.map(m => (
            <div key={m.id} style={{ 
              marginBottom: '20px', 
              padding: '10px', 
              borderLeft: m.role === 'user' ? '2px solid #555' : '2px solid #ff0000',
              backgroundColor: m.role === 'user' ? 'transparent' : '#110000'
            }}>
              <div style={{ fontSize: '0.8rem', color: m.role === 'user' ? '#888' : '#ff4444', marginBottom: '5px' }}>
                {m.role === 'user' ? 'DU:' : 'DIE HARTE WAHRHEIT:'}
              </div>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.4' }}>
                {m.content}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} style={{ 
          position: 'fixed', 
          bottom: '0', 
          left: '0', 
          width: '100%', 
          padding: '20px', 
          backgroundColor: '#000',
          borderTop: '1px solid #333',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <input
            style={{ 
              maxWidth: '600px', 
              width: '100%', 
              padding: '15px', 
              background: '#111', 
              color: '#fff', 
              border: '1px solid #444',
              outline: 'none'
            }}
            value={input}
            placeholder="Frag mich was..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
