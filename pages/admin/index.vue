<template>
  <div>
    <WelcomeBaseAdmin />

    <div class="p-3">
      <p class="text-4xl font-bold text-[#0f8B8D]">Your Stats</p>
    </div>

    <div class="bg-white flex flex-wrap justify-around mt-5">
      <AnalysisBoard
        class="w-1/2 lg:w-[30%] h-56"
        text="Alltime Profit"
        :amount="analysis.totalProfits"
      />
      <AnalysisBoard
        class="w-1/2 lg:w-[30%] h-56"
        text="Users Wallet"
        :amount="analysis.userWallets"
      />
      <AnalysisBoard
        class="w-1/2 lg:w-[30%] h-56"
        text="Site Wallet"
        :amount="analysis.siteBalance"
      />
      <AnalysisBoard
        class="w-1/2 lg:w-[30%] h-56"
        text="Withdrawable Profit"
        :amount="analysis.withdrawableBalance"
      />
      <AnalysisBoard
        class="w-1/2 lg:w-[30%] h-56"
        text="SMARTSMS API Balance"
        :amount="analysis.smartsms"
      />
      <AnalysisBoard
        class="w-1/2 lg:w-[30%] h-56"
        text="Arise Data(Utilities) - Balance"
        :amount="analysis.arisedata"
      />
      <AnalysisBoard
        class="w-1/2 lg:w-[30%] h-56"
        text="SIM Hosting (SME & Airtime) - Balance"
        :amount="analysis.simhosting"
      />
      
      <AnalysisBoard
        v-for="analyze in analysisItems"
        :key="analyze.slug"
        class="w-1/2 lg:w-[30%] h-56"
        :text="analyze.name"
        :amount="getAmount(analyze.slug)"
      />
    </div>
  </div>
</template>

<script type="text/javascript" setup>
import { adminStore } from "@/store/admin";

const adminstore = adminStore();
let analysis = ref({});
adminstore.getUserAccounts();

const analysisItems = ref([
  {
    name: "Bulk SMS Payments",
    slug: "bulksms-payment",
  },
  {
    name: "SME Data Payment",
    slug: "smedata-payment",
  },
  {
    name: "Airtime Payments",
    slug: "airtime-payment",
  },
  {
    name: "Electricity Payment",
    slug: "electricity-payment",
  },
  {
    name: "TV cable Payments",
    slug: "tvcable-payment",
  },
  {
    name: "Gifting data Payment",
    slug: "giftingdata-payment",
  },
  {
    name: "Wallets Bank Deposits",
    slug: "bank-deposits",
  },
]);

try {
  const response = await adminstore.getProiftAnalysis();

  analysis.value = response.data;
} catch (error) {
  console.log(error);
}

const getAmount = (slug) => {
    const analysisExists = analysis.value.totals.find((x) => x.name == slug)

    if(analysisExists != undefined){
        return analysisExists.total
    }else{
        return 0
    }
}
</script>

<style lang="scss" scoped></style>
