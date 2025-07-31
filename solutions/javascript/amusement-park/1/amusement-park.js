export function createVisitor(name, age, ticketId) {
  const visitorData = {"name" : name, "age" : age, "ticketId" : ticketId};
  return visitorData
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor
}


export function ticketStatus(tickets, ticketId) {

  if (!tickets.hasOwnProperty(ticketId)) {
    return 'unknown ticket id';
  } else if (tickets[ticketId] === null) {
    return 'not sold';
  } else {
    return `sold to ${tickets[ticketId]}`
  }
}


export function simpleTicketStatus(tickets, ticketId) {
    if (!tickets.hasOwnProperty(ticketId) || tickets[ticketId] === null) {
    return 'invalid ticket !!!';
  } else {
    return tickets[ticketId]
  };
}


export function gtcVersion(visitor) {

  if (visitor.hasOwnProperty("gtc")) {
    return visitor.gtc.version;
  }
}
