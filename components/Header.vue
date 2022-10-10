<template>
  <header>
    <NuxtLink to="/"> Weddin </NuxtLink>
    <nav>
      <NuxtLink to="/demo"> Demo </NuxtLink>
      <NuxtLink to="/doc"> Documentation </NuxtLink>
      <NuxtLink to="/pricing"> Pricing </NuxtLink>
      <NuxtLink to="/card"> Buy </NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>
