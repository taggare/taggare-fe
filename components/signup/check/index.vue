<template>
  <div>
    <h1>Hello</h1>
    <h2>Hello</h2>
    <h3>{{ message }}</h3>
    <input type="text" v-model="message" />
    <span>{{ isClicked }}</span>
    <input type="checkbox" v-model="isClicked" />
    <img :src="isClicked ? fire : water" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: null,
      isClicked: false,
      water:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDpj2BiMv8zQDcW8a5iVsIascAHzp88Uflivgy_2mgbiWCb4Aq&usqp=CAU',
      fire: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/fire.png'
    };
  }
};
</script>
