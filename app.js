* { box-sizing: border-box; }
html, body {
  margin: 0;
  min-height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(180deg, #dfeeff 0%, #edf5ff 100%);
  color: #10233d;
}
body { min-height: 100vh; }
button, input, select { font: inherit; }
.app-shell {
  width: min(100%, 480px);
  margin: 0 auto;
  min-height: 100vh;
  background: #f5f9ff;
  border-left: 1px solid rgba(16, 35, 61, 0.08);
  border-right: 1px solid rgba(16, 35, 61, 0.08);
}
.safe-area {
  padding-top: max(12px, env(safe-area-inset-top));
  padding-left: max(12px, env(safe-area-inset-left));
  padding-right: max(12px, env(safe-area-inset-right));
  padding-bottom: max(12px, env(safe-area-inset-bottom));
}
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #0d47c4, #0f4fbf);
  color: #fff;
  padding: 12px 16px;
  border-radius: 18px;
  box-shadow: 0 8px 20px rgba(15, 79, 191, 0.18);
}
.header-title { display: flex; flex-direction: column; }
.logo {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.logo span { color: #ffd633; }
.subtitle {
  opacity: 0.9;
  font-size: 0.78rem;
  margin-top: 2px;
}
.btn {
  border: none;
  border-radius: 12px;
  background: #0f4fbf;
  color: white;
  padding: 10px 14px;
  font-weight: 700;
  min-height: 42px;
  box-shadow: 0 4px 14px rgba(15, 79, 191, 0.12);
}
.btn.small { padding: 8px 10px; min-height: 36px; }
.btn.secondary { background: #eaf2ff; color: #0f2d59; }
.btn.accent { background: #ffd633; color: #10233d; }
.btn.danger { background: #d82f4b; }
.tabs {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 6px;
  margin: 12px 0 8px;
}
.tab {
  background: rgba(255,255,255,0.8);
  border: 1px solid rgba(15, 79, 191, 0.06);
  color: #224c9c;
  min-height: 42px;
  border-radius: 12px;
  font-weight: 700;
}
.tab.active {
  background: linear-gradient(135deg, #0f4fbf, #0d47c4);
  color: white;
}
.main-content { padding-bottom: 24px; }
.view { display: none; }
.view.active { display: block; }
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0 10px;
}
.section-header h2 {
  margin: 0;
  font-size: 1.35rem;
}
.muted-label {
  color: #52657a;
  font-size: 0.76rem;
  font-weight: 600;
}
.card {
  background: #fff;
  border-radius: 18px;
  border: 1px solid rgba(16, 35, 61, 0.06);
  box-shadow: 0 8px 18px rgba(15, 79, 191, 0.04);
}
.schedule-list { display: grid; gap: 10px; }
.schedule-item {
  display: grid;
  gap: 10px;
  padding: 12px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(16, 35, 61, 0.06);
}
.schedule-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.schedule-date { font-weight: 800; }
.schedule-status {
  font-size: 0.72rem;
  color: #0f4fbf;
  background: #edf5ff;
  border-radius: 999px;
  padding: 4px 9px;
  font-weight: 700;
}
.schedule-meta {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  color: #4c617b;
  font-size: 0.85rem;
}
.schedule-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.scoreboard {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 8px;
  align-items: center;
  padding: 18px 12px;
  background: linear-gradient(135deg, #0f4fbf, #0d47c4);
  color: #fff;
}
.team-block, .middle-block { text-align: center; }
.mini-label {
  text-transform: uppercase;
  font-size: 0.74rem;
  letter-spacing: 0.05em;
  opacity: 0.88;
}
.score-value {
  font-size: clamp(2.6rem, 8vw, 4.2rem);
  font-weight: 900;
  line-height: 1;
}
.period-label {
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.9;
}
.time-label {
  font-size: clamp(1.5rem, 6vw, 2.2rem);
  font-weight: 800;
  margin: 8px 0 12px;
}
.live-controls {
  display: flex;
  gap: 6px;
  justify-content: center;
  flex-wrap: wrap;
}
.event-panel {
  margin-top: 12px;
  padding: 12px;
}
.event-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr 1.2fr 0.7fr auto;
  gap: 8px;
}
select, input {
  width: 100%;
  min-height: 42px;
  border-radius: 10px;
  border: 1px solid rgba(16, 35, 61, 0.08);
  background: #f7faff;
  padding: 8px 10px;
  color: #10233d;
}
.event-toolbar {
  margin-top: 10px;
}
.event-log {
  margin-top: 12px;
  max-height: 220px;
  overflow: auto;
  background: #f7faff;
  border-radius: 12px;
  padding: 8px;
  display: grid;
  gap: 8px;
}
.event-item {
  background: white;
  border: 1px solid rgba(16, 35, 61, 0.06);
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 0.9rem;
}
.match-footer {
  margin-top: 12px;
  padding: 12px;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 12px;
}
.stat-card {
  padding: 10px;
  background: #fff;
  border-radius: 14px;
  border: 1px solid rgba(16, 35, 61, 0.06);
  text-align: center;
}
.stat-card .value {
  font-size: 1.4rem;
  font-weight: 900;
  color: #0f4fbf;
}
.stat-card .label { color: #52657a; font-size: 0.8rem; }
.stats-table, .race-panel, .history-list {
  display: grid;
  gap: 10px;
}
.table-row {
  display: grid;
  grid-template-columns: 1.4fr repeat(4, minmax(0, 0.65fr));
  gap: 6px;
  align-items: center;
  background: #fff;
  border: 1px solid rgba(16, 35, 61, 0.06);
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 0.88rem;
}
.table-row.header {
  font-weight: 800;
  background: #ecf5ff;
  color: #133f83;
}
.race-item {
  background: #fff;
  border-radius: 14px;
  border: 1px solid rgba(16, 35, 61, 0.06);
  padding: 12px;
}
.race-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  gap: 8px;
}
.progress-track {
  position: relative;
  height: 12px;
  background: #edf5ff;
  border-radius: 999px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ffd633, #f3b300);
  border-radius: inherit;
}
.history-item {
  padding: 12px;
  border-radius: 14px;
  background: white;
  border: 1px solid rgba(16,35,61,0.06);
}
.history-item h3 {
  margin: 0 0 8px;
  font-size: 1.05rem;
}
.history-item p { margin: 4px 0; color: #53657a; }
.settings-card {
  padding: 12px;
  display: grid;
  gap: 10px;
  margin-top: 10px;
}
.settings-card label {
  font-weight: 700;
  color: #143a6a;
}
.upload-label {
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  background: #edf5ff;
  color: #123f7a;
  border-radius: 10px;
  padding: 0 12px;
  font-weight: 700;
}
.version-row {
  margin-top: 12px;
}
.toast {
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%) translateY(16px);
  background: rgba(16, 35, 61, 0.94);
  color: white;
  padding: 10px 14px;
  border-radius: 999px;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
  font-size: 0.9rem;
}
.toast.visible { opacity: 1; transform: translateX(-50%) translateY(0); }
@media (max-width: 420px) {
  .tabs { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .event-grid { grid-template-columns: 1fr 1fr; }
  .event-grid button { grid-column: 1 / -1; }
}
