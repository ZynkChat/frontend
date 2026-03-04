import { createStore } from 'zustand/vanilla'

export enum ModalType {
  NONE = 'NONE',

  // course
  SHOW_ERRORS_FOR_SUBMIT = 'SHOW_ERRORS_FOR_SUBMIT',

  // course review
  LEAVE_RATING_STEP1 = 'LEAVE_RATING_STEP1',
  LEAVE_RATING_STEP2 = 'LEAVE_RATING_STEP2',
  LEAVE_RATING_STEP3 = 'LEAVE_RATING_STEP3',

  // mentor review
  LEAVE_MENTOR_RATING_STEP1 = 'LEAVE_MENTOR_RATING_STEP1',
  LEAVE_MENTOR_RATING_STEP2 = 'LEAVE_MENTOR_RATING_STEP2',
  LEAVE_MENTOR_RATING_STEP3 = 'LEAVE_MENTOR_RATING_STEP3',

  // mentor
  BLOCK_DATES = 'BLOCK_DATES',
  CANCEL_PENDING_UPDATE = 'CANCEL_PENDING_UPDATE',
  ADD_EXPERIENCE = 'ADD_EXPERIENCE',
  EDIT_EXPERIENCE = 'EDIT_EXPERIENCE',
  DELETE_EXPERIENCE = 'DELETE_EXPERIENCE',

  // quiz
  SUBMIT_QUIZ = 'SUBMIT_QUIZ',
}
export interface IModal<T = unknown> {
  readonly openModal: ModalType
  readonly data?: T
}

export interface IModalActions {
  readonly actions: {
    setOpenModal: (openModal: ModalType, data?: unknown) => void
    closeModal: () => void
  }
}

export interface IModalStore extends IModal, IModalActions {}

export const initModalState: IModal = {
  openModal: ModalType.NONE,
}

export type ModalStore = ReturnType<typeof createModalStore>

export const createModalStore = (initState: IModal = initModalState) => {
  return createStore<IModalStore>()((set) => ({
    ...initState,
    actions: {
      setOpenModal: (openModal: ModalType, data?: unknown) =>
        set({ openModal, data }),
      closeModal: () => set(initState),
    },
  }))
}
