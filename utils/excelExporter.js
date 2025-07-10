const XLSX = require('xlsx');
function exportToExcel(users) {
  const userSheet = users.map(u => ({
    ID: u.id, Name: u.name, Email: u.email, Mobile: u.mobile,
  }));
  const taskSheet = [];
  users.forEach(u => {
    u.tasks.forEach(t => {
      taskSheet.push({
        TaskID: t.id, Task: t.task_name, Status: t.status, User: u.name
      });
    });
  });
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(userSheet), 'Users');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(taskSheet), 'Tasks');
  return XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
}
module.exports = exportToExcel;
