
import { computed, ref, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
export function useProjectGallery(
  screenshots: MaybeRefOrGetter<string[]>
) {
  const activeIndex = ref<number | null>(null)
  const images = computed(() => toValue(screenshots))
  const activeImage = computed(() =>
    activeIndex.value === null
      ? null
      : images.value[activeIndex.value] ?? null
  )
  const imageCount = computed(() => images.value.length)
  const imagePosition = computed(() =>
    activeIndex.value === null ? 0 : activeIndex.value + 1
  )
  const imageCaption = computed(() => {
  if (!activeImage.value) return ''

  const filename = activeImage.value
    .split('/')
    .pop()
    ?.replace(/\.[^.]+$/, '') ?? ''

  return filename
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, character => character.toUpperCase())
})
  function openGallery(index: number) {
    if (index < 0 || index >= images.value.length) return
    activeIndex.value = index
  }
  function closeGallery() {
    activeIndex.value = null
  }
  function nextImage() {
    if (activeIndex.value === null || !images.value.length) return
    activeIndex.value =
      (activeIndex.value + 1) % images.value.length
  }
  function previousImage() {
    if (activeIndex.value === null || !images.value.length) return
    activeIndex.value =
      (activeIndex.value - 1 + images.value.length) %
      images.value.length
  }
  return {
    activeImage,
    activeIndex,
    imageCount,
    imagePosition,
    imageCaption,
    openGallery,
    closeGallery,
    nextImage,
    previousImage,
  }
}
