export default function ({ redirect, route }) {
    // If the user is not authenticated
    this.$axios
    if (! localStorage.setItem('token', response.data.access_token)) {
      const path = encodeURIComponent(route.path);
      return redirect(`/login?r=${path}`);
    }
  }
  