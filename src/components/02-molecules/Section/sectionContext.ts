import type { InjectionKey } from 'vue'

/** Set by `NeoSection` so descendant organisms can skip their own wrapper and avoid the nested-section layout bug. */
export const neoSectionInjectionKey: InjectionKey<boolean> = Symbol('NeoSection')
