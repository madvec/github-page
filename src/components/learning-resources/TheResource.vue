<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode"
      >Stored Resource</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addresButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
  components: {
    'stored-resources': StoredResources,
    'add-resource': AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'id-1',
          title: 'Official Vue Guide',
          description: 'This is the official guide.',
          link: 'https://vuejs.org'
        },
        {
          id: 'id-2',
          title: 'Google',
          description: 'Just learn to Google',
          link: 'https://google.org'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      }
      this.storedResources.unshift(newResource)
      this.selectedTab = 'stored-resources'
    },
    removeResource(resId) {
    //   this.storedResources = this.storedResources.filter((res) => res.id !== resId)
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addresButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  }
}
</script>
