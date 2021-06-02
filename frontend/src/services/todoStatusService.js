const nextStatus = {
  OPEN: 'IN_PROGRESS',
  IN_PROGRESS: 'DONE',
  DONE: 'DONE',
}

const slugStatus = {
  open: 'OPEN',
  doing: 'IN_PROGRESS',
  done: 'DONE',
}

const statusTitle = {
  OPEN: 'Todo',
  IN_PROGRESS: 'Doing',
  DONE: 'Done',
}

export const getNextStatus = status => nextStatus[status]

export const slugToStatus = slug => slugStatus[slug]

export const statusToTitle = status => statusTitle[status]
