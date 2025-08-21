module.exports = {
  api: [
    // 'create',
    {
      type: 'category',
      label: 'PayIn APIs',       // Group cashier-apis items
      items: [
        'api/cryptobridge',
        'api/mobilemoney',
        'api/neosurf',
        'api/spei',
        'api/interacetransfer',
        'api/interacexpress',
      ],
    },
  ],
  apmDocs: [
    'overview',
    'environments',
    'Integration Steps',
    'Webhook',
    'Status and Error Codes',
    {
      type: 'html',
      value: '<div class="sidebar-section-label">Payment Methods</div>',
    },
    {
      type: 'category',
      label: 'Alternative Payment Methods',
      className: 'sidebar-alternative',
      items: [
        'apm/Cards',
        'apm/Interac E-Transfer',
        'apm/Interac Express',
        'apm/PIX',
        'apm/Mobile Money',
        'apm/SPEI',
        'apm/Neosurf',
        'apm/Crypto Bridge',
        'apm/Crypto Wallet',
        'apm/FawryPay',
        'apm/PayID',
        'apm/Bank Transfer',
        'apm/OnRamp',
        'apm/Openbanking',
      ],
    },
    {
      type: 'category',
      label: 'Cards',
      className: 'sidebar-cards',
      items: [
        'apm/Cards',
        'apm/Bank Transfer',
        'apm/OnRamp',
        'apm/Openbanking',
      ],
    },
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