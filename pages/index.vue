<template>
  <div>
    <h1>Welcome!</h1>
    <NLink to="/about"> About Page </NLink>
    <nuxt-picture src="/AnyConv.com__IMG_2793.jpg" format="webp" />
  </div>
</template>

<script>
export default {
  head: {
    title: "Home page",
  },
};
</script>
