import type { ParsedContent } from "@nuxt/content"
import { ref, watch } from 'vue'

export default function useWorks() {
  const activeWork = ref<string | boolean>(false)
  const work = ref<ParsedContent | null>(null)

  const updateWork = async (selectedWork: string | boolean) => {
    if (!selectedWork) {
      activeWork.value = false
      return
    }
    activeWork.value = selectedWork
  }

  const getWork = async () => {
    const { data } = await useAsyncData(() => queryContent().where({ key: activeWork.value }).findOne())
    if (!data.value) {
      activeWork.value = ''
      return
    }
    work.value = data.value
  }

  watch(activeWork, (newVal) => {
    if (!newVal) return;
    getWork()
  }, { immediate:true, deep: true })

  return {
    work,
    activeWork,
    updateWork,
  }
}
