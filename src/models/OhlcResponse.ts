// jsonの中身のデータ
type OhlcSummary = [number, number, number, number,number,number,number]
const OhlcColumns = ["CloseTime", "OpenPrice", "HighPrice", "LowPrice", "ClosePrice", "Volume", "QuoteVolume"]
type OhlcResponse = OhlcSummary[]

// QuoteVolume は、特定の金融資産に対して特定の期間に発生した気配値や取引の数を示す指標です。
// これは、特定の資産の市場活動や流動性を示す指標としてよく利用されます。
// 例えば、ある銘柄のQuoteVolumeが高い場合、その銘柄に対する関心が高く、活発に取引されていることを示すことがあります。
// 逆に、QuoteVolume が低い場合は、その銘柄への関心が低く、取引頻度が低いことを示唆する場合があります。

// QuoteVolumeは、金融資産の取引量とは異なることに留意することが重要です。
// 一方、QuoteVolume は、各取引に関与したユニット数に関係なく、その資産に対して発生した相場や取引の数を指します。

// 金融市場では、QuoteVolumeはしばしば他の指標と組み合わせて、特定の資産のパフォーマンスに関する洞察を得るために使用されます。
// 例えば、QuoteVolumeが増加すると、価格が上昇し、その資産に対する需要が高まっていることが分かります。
// 同様に、QuoteVolumeが減少した場合は、価格が下落し、その資産に対する需要が減少していることを示唆します。

export {
  OhlcResponse,
  OhlcSummary,
  OhlcColumns
}