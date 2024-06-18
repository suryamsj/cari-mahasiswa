<script>
  import Footer from '$lib/components/Footer.svelte';
import Header from '$lib/components/Header.svelte';
import Layout from '$lib/components/Layout.svelte';
  import '../app.css';
</script>


<Header />
<Layout>
  <slot/>
</Layout>
<Footer />