exports.ekle = (req, res) => {
  const { adet } = req.body;

  if (!adet || adet <= 0) {
    return res.status(400).json({ mesaj: "Adet 0'dan büyük olmalıdır" });
  }

  res.json({ mesaj: "Sipariş eklendi" });
};

exports.listele = (req, res) => {
  res.json({ mesaj: "Siparişler listelendi" });
};

exports.guncelle = (req, res) => {
  res.json({ mesaj: "Sipariş güncellendi" });
};

exports.sil = (req, res) => {
  const { durum } = req.body;

  if (durum === "Teslim Edildi") {
    return res.status(400).json({ mesaj: "Teslim edilen sipariş silinemez" });
  }

  res.json({ mesaj: "Sipariş silindi" });
};
