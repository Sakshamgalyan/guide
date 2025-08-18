module.exports = {
  api: [
    'create',
    {
      type: 'category',
      label: 'PayIn APIs',       // Group cashier-apis items
      items: [
        'payin/interac',
        'payin/pix',
      ],
    },
  ],
  apmDocs: [
    'introduction',
    'overview',
    'environments',
    'authentication',
    'headers',
    'integration-steps',
    'webhooks',
    'status-code',
    {
      type: 'category',
      label: 'Trust-Score',       // Group cashier-apis items
      items: [
        'trust-score/trustScoreDetailed',
        'trust-score/checkTransactionAllowed',
      ],
    },
    {
      type: 'category',
      label: 'Cashier APIs',       // Group cashier-apis items
      link: {
        type: 'doc',
        id: 'cashier-apis/cashier-apis', // ← shows index.md content when clicking "Cashier APIs"
      },
      items: [
        'cashier-apis/create-customer',
        'cashier-apis/Get-customer-details',
        'cashier-apis/Update-customer-details',
        'cashier-apis/Payin',
        'cashier-apis/Payout',
        'cashier-apis/Check-Status',
      
      ],
    },
  ],
};