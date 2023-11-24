import Swal from 'sweetalert2';

export const showAlert = (title: string, text: string = 'success') => {
  Swal.fire({
    title,
    text,
    // icon,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'OK',
  });
};