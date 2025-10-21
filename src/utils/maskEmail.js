export function maskEmail(email) {
  const [local, domain] = email.split('@');
  const domainParts = domain.split('.');

  const maskedLocal =
    local.length > 1
      ? local[0] + '*'.repeat(local.length - 1)
      : local;

  const domainName = domainParts[0];
  const maskedDomainName =
    domainName.length > 1
      ? domainName[0] + '*'.repeat(domainName.length - 1)
      : domainName;

  const extension = domainParts.slice(1).join('.');

  return `${maskedLocal}@${maskedDomainName}.${extension}`;
}
