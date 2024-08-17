<template>
  <v-dialog max-width="350">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" class="my-2 align-self-stretch" variant="outlined" rounded="xl" color="primary">{{
        $t("result.content.btn2") }}</v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-text>
          {{ shareMessage }}
        </v-card-text>
        <v-divider class="border-opacity-25" />
        <v-card-item prepend-icon="mdi-content-copy" :title="$t(`result.content.share.copy`)"
          @click="copyClipboard"></v-card-item>
        <a class="text-black" v-for="(shareItem, i) in shareButtons" :href="shareItem.url" :key="i">
          <v-divider class="border-opacity-25" :key="i" />
          <v-card-item :prepend-icon="shareItem.icon"
            :title="$t(`result.content.share.share`, { social: shareItem.social })" />
        </a>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="isActive.value = false">{{ $t(`result.content.share.close`) }}</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
const friend = useFriend();
const { t } = useI18n();
const shareMessage = t(`result.content.share.label_${friend.gender}`, { score: friend.npcScore })

const shareButtons = [
  {
    icon: "$facebook",
    social: "Facebook",
    url: `https://www.facebook.com/sharer.php?u=https://npccalculator.es/`
  },
  {
    icon: "$whatsapp",
    social: "Whatsapp",
    url: `whatsapp://send?text=${shareMessage}`
  },
  {
    icon: "$telegram",
    social: "Telegram",
    url: `https://telegram.me/share/url?url=https://npccalculator.es/&text=${shareMessage}`
  },
  {
    icon: "$x",
    social: "X",
    url: `https://x.com/share?&text=${shareMessage}`
  },
]

function copyClipboard() {
  navigator.clipboard.writeText(shareMessage);
  alert(t('result.content.share.copied'));
}
</script>

<style lang="scss" scoped></style>