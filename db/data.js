const Jadwal = [
    {
        jadwal_id: "001",
        bandara_kode_keberangkatan: "HAL",
        bandara_kode_tujuan: "RAD",
        maskapai_id: "GA",        
    },
    {
        jadwal_id: "002",
        bandara_kode_keberangkatan: "HAL",
        bandara_kode_tujuan: "RAD",
        maskapai_id: "SA",
    },
    {
        jadwal_id: "003",
        bandara_kode_keberangkatan: "RAD",
        bandara_kode_tujuan: "HAL",
        maskapai_id: "BA",
    },
    {
        jadwal_id: "004",
        bandara_kode_keberangkatan: "SOE",
        bandara_kode_tujuan: "JUA",
        maskapai_id: "GA",
    },
    {
        jadwal_id: "005",
        bandara_kode_keberangkatan: "SOE",
        bandara_kode_tujuan: "JUA",
        maskapai_id: "BA",
    },
    {
        jadwal_id: "006",
        bandara_kode_keberangkatan: "JUA",
        bandara_kode_tujuan: "SOE",
        maskapai_id: "LA",
    },
    {
        jadwal_id: "007",
        bandara_kode_keberangkatan: "JUA",
        bandara_kode_tujuan: "SOE",
        maskapai_id: "AA",
    },
    {
        jadwal_id: "008",
        bandara_kode_keberangkatan: "HAL",
        bandara_kode_tujuan: "JUA",
        maskapai_id: "CL",
    },
    {
        jadwal_id: "009",
        bandara_kode_keberangkatan: "HAL",
        bandara_kode_tujuan: "JUA",
        maskapai_id: "LA",
    },
    {
        jadwal_id: "010",
        bandara_kode_keberangkatan: "HAL",
        bandara_kode_tujuan: "JUA",
        maskapai_id: "GA",
    },
    {
        jadwal_id: "011",
        bandara_kode_keberangkatan: "HAL",
        bandara_kode_tujuan: "SOE",
        maskapai_id: "SA",
    },
    {
        jadwal_id: "012",
        bandara_kode_keberangkatan: "SOE",
        bandara_kode_tujuan: "RAD",
        maskapai_id: "CL",
    },
    {
        jadwal_id: "013",
        bandara_kode_keberangkatan: "SOE",
        bandara_kode_tujuan: "RAD",
        maskapai_id: "AA",
    },
    {
        jadwal_id: "014",
        bandara_kode_keberangkatan: "SUL",
        bandara_kode_tujuan: "RAD",
        maskapai_id: "CL",
    },
    {
        jadwal_id: "015",
        bandara_kode_keberangkatan: "SUL",
        bandara_kode_tujuan: "RAD",
        maskapai_id: "AA",
    },
    {
        jadwal_id: "016",
        bandara_kode_keberangkatan: "NGU",
        bandara_kode_tujuan: "NAH",
        maskapai_id: "GA",
    },
    {
        jadwal_id: "017",
        bandara_kode_keberangkatan: "NGU",
        bandara_kode_tujuan: "NAH",
        maskapai_id: "BA",
    },
]

const Maskapai = [
    {
        maskapai_id: "GA",
        maskapai_nama: "Garuda Indonesia",
    },
    {
        maskapai_id: "LA",
        maskapai_nama: "Lion Air",
    },
    {
        maskapai_id: "SA",
        maskapai_nama: "Sriwijaya Air",        
    },
    {
        maskapai_id: "BA",
        maskapai_nama: "Batik Air",
    },
    {
        maskapai_id: "CL",
        maskapai_nama: "Citilink",
    },
    {
        maskapai_id: "AA",
        maskapai_nama: "Air Asia",       
    },
]

const Bandara = [
    {
        bandara_kode: "SOE",
        bandara_nama: "Soekarno Hatta",
    },
    {
        bandara_kode: "NGU",
        bandara_nama: "Ngurah Rai",
    },
    {
        bandara_kode: "SUL",
        bandara_nama: "Sultan Hasanudin",
    },
    {
        bandara_kode: "NAH",
        bandara_nama: "Nang Hadim",
    },
    {
        bandara_kode: "HAL",
        bandara_nama: "Halim Perdanakusuma",
    },
    {
        bandara_kode: "JUA",
        bandara_nama: "Juanda",
    },
    {
        bandara_kode: "RAD",
        bandara_nama: "Raden Inten",
    },
]

export {Maskapai, Bandara, Jadwal}