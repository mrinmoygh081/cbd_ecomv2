import swal from "sweetalert";

export const inputOnWheelPrevent = (e) => {
  // Prevent the input value change
  e.target.blur();

  // Prevent the page/container scrolling
  e.stopPropagation();

  // Refocus immediately, on the next tick (after the current     function is done)
  setTimeout(() => {
    e.target.focus();
  }, 0);
};
export const inputChangePrevent = (e) => {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    e.preventDefault();
  }
};
export const inputChange = (e, form, setForm) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
};

export const handleFileChange = (e, form, setForm) => {
  const { name } = e.target;
  setForm({ ...form, [name]: e.target.files[0] });
};

export const reConfirm = (file, handleFun, warningText) => {
  if (file) {
    swal({
      title: "Are you sure?",
      text: warningText,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleFun(file);
      }
    });
  } else {
    swal({
      title: "Warning",
      text: warningText,
      icon: "warning",
      button: true,
    });
  }
};
export const checkTypeArr = (data) => {
  return data && Array.isArray(data);
};
