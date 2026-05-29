import type { InjectionKey } from 'vue'

/**
 * Provided by `NeoSection` so descendant organisms can detect that they are
 * already inside a section and skip rendering their own internal `NeoSection`
 * wrapper. Prevents the nested-NeoSection layout bug.
 */
export const neoSectionInjectionKey: InjectionKey<boolean> = Symbol('NeoSection')
