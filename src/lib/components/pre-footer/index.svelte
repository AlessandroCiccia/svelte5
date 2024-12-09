<script lang="ts">
  import { preFooter } from "../data/PreFooter";

  let w: number = $state(0);
  let h: number = $state(0);

  const preFooterData = preFooter;
  console.log(preFooterData);
</script>

<section bind:clientWidth={w} bind:clientHeight={h}>
  <div class="prefooter-container">
    <h2>{preFooterData.title}</h2>

    <div
      style:flex-direction={w > 980 ? "row" : "column"}
      class="category-brand-container"
    >
      <div>
        <h3>{preFooterData.vehicleCategories.title}</h3>
        <div
          style:overflow-x={w > 980 ? "auto" : "scroll"}
          class="category-container"
        >
          <div
            style:flex-wrap={w > 980 ? "wrap" : "nowrap"}
            class="category-items-container"
          >
            {#each preFooterData.vehicleCategories.items as category}
              <a
                href={category.link.action.type === "view"
                  ? category.link.action.path
                  : ""}
              >
                <div
                  style:max-width={w > 980 ? "50%" : "100%"}
                  class="category-item"
                >
                  <img
                    src={category.assetImage.src}
                    alt={category.assetImage.alt}
                  />
                  <span>
                    {category.codeCategory[0].description}
                  </span>
                </div>
              </a>
            {/each}
          </div>
        </div>
      </div>

      <div>
        <h3>{preFooterData.vehicleBrands.title}</h3>
        <div
          style:overflow-x={w > 980 ? "auto" : "scroll"}
          class="brand-container"
        >
          <div
            style:flex-wrap={w > 980 ? "wrap" : "nowrap"}
            class="brand-items-container"
          >
            {#each preFooterData.vehicleBrands.items as brand}
              <a
                href={brand.link.action.type === "view"
                  ? brand.link.action.path
                  : ""}
              >
                <img
                  class="brand-image"
                  src={brand.assetImage.src}
                  alt={brand.assetImage.alt}
                />
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <div class="custmer-favorites-container"></div>
  </div>
</section>

<style>
  .prefooter-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: aliceblue;

    .category-brand-container {
      display: flex;

      .category-container,
      .brand-container {
        display: flex;
        flex-direction: column;
        gap: 25px;

        .category-items-container,
        .brand-items-container {
          display: flex;
          /* flex-wrap: wrap; */
          gap: 25px;
          .category-item {
            width: 110px;
            height: 90px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            border-radius: 20px;

            img {
              width: 100px;
            }
          }

          .brand-image {
            width: 90px;
            margin-bottom: 30px;
          }
        }
      }
    }
  }
</style>
