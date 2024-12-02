<script lang="ts">
    import type { BannerStickyPromoProps } from "./model";

    export let data: BannerStickyPromoProps;

    $: isDesktop = window.innerWidth >= 768;
    $: isActive = data.enabled && new Date(data.startPublishDate) <= new Date() && new Date(data.endPublishDate) >= new Date();
</script>


{#if isActive}
  <div class:desktop={isDesktop} class:mobile={!isDesktop}>
    <a href={data.link.action.type === 'view' ? data.link.action.path : ''} class="cta-btn">
    <div class="banner-container">
      <div class="banner-content">
        <p>{data.text}</p>
        <img src="arrow-right.svg" alt="" srcset="">
      </div>
    </div>
    </a>
  </div>
{/if}

<style>
  .desktop {
    background-color: #243882;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mobile {
    background-color: #ff6b6b;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .banner-content {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  p {
    margin: 0;
    font-weight: bold;
    text-decoration: underline;
  }

  .cta-btn {
    color: white;
    border: 0;
  }
</style>