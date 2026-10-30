
import { ref } from 'vue'
import { getCertificates } from '@/services/api'
import type { Certificate } from '@/types/certificate'

export function useCertificates() {
  const certificates = ref<Certificate[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  async function loadCertificates() {
    loading.value = true
    error.value = null
    try {
      certificates.value = await getCertificates()
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Unable to load certificates'
    } finally {
      loading.value = false
    }
  }
  return {
    certificates,
    loading,
    error,
    loadCertificates,
  }
}
