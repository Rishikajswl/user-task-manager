function validateUserForm() {
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobReg = /^[6-9]\d{9}$/;
  if (!emailReg.test(email)) {
    alert("Invalid Email");
    return false;
  }
  if (!mobReg.test(mobile)) {
    alert("Invalid Mobile Number");
    return false;
  }
  return true;
}
