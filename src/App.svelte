<script lang="ts">
  import BannerStickyPromo from "./lib/components/BannerStickyPromo/index.svelte";
  const bannerStickyPromo = {
	text: 'TAKATA Airbag Recall Campaign: Citroën C3 & DS3',
	link: {
		label: null,
		blank: false,
		tagAdobe: 'cta_homepage_banner_sticky_promo',
		action: {
			type: 'externalUrl',
			url: 'https://google.com'
		}
	},
	startPublishDate: '2024-11-28',
	endPublishDate: '2024-12-31',
	enabled: true
};

</script>

<main>
  <div>
    <BannerStickyPromo data={bannerStickyPromo} />
  </div>
</main>
