const nftList = {
  trending: [
    {
      rank: 1,
      name: "Proud Kitty",
      logo: "https://public.nftstatic.com/static/nft/webp/9b59f48f81d04cbbbacff707e43b9410_400x400.webp",
      floor: { "1H": "0.1 BNB", "6H": "0.11 BNB", "24H": "0.12 BNB", "7D": "0.15 BNB" },
      volume: { "1H": "200 BNB", "6H": "210 BNB", "24H": "220 BNB", "7D": "250 BNB" },
      floorChange: { "1H": "+0.1%", "6H": "+2.0%", "24H": "-0.3%", "7D": "+4.0%" },
      volumeChange: { "1H": "-0.1%", "6H": "+0.5%", "24H": "-2.0%", "7D": "+10.0%" }
    },
    {
      rank: 2,
      name: "Happy Rabbit",
      logo: "https://public.nftstatic.com/static/nft/webp/nft-cex/S3/1705819009068_n997qpksmsmanl4oicxixd5zwajuwrow_64x64.webp",
      floor: { "1H": "0.2 BNB", "6H": "0.22 BNB", "24H": "0.24 BNB", "7D": "0.28 BNB" },
      volume: { "1H": "180 BNB", "6H": "190 BNB", "24H": "200 BNB", "7D": "230 BNB" },
      floorChange: { "1H": "-0.2%", "6H": "+1.8%", "24H": "-0.5%", "7D": "+3.5%" },
      volumeChange: { "1H": "+0.2%", "6H": "-0.3%", "24H": "+1.5%", "7D": "-8.0%" }
    },
    {
      rank: 3,
      name: "Golden Tiger",
      logo: "https://public.nftstatic.com/static/nft/webp/448fce1fabc24a46b4a1cba661fec292_64x64.webp",
      floor: { "1H": "0.3 BNB", "6H": "0.32 BNB", "24H": "0.34 BNB", "7D": "0.38 BNB" },
      volume: { "1H": "220 BNB", "6H": "230 BNB", "24H": "240 BNB", "7D": "270 BNB" },
      floorChange: { "1H": "+0.1%", "6H": "-1.5%", "24H": "+0.2%", "7D": "-4.2%" },
      volumeChange: { "1H": "-0.3%", "6H": "+0.6%", "24H": "-1.0%", "7D": "+7.0%" }
    },
    {
      rank: 4,
      name: "Cool Panda",
      logo: "https://public.nftstatic.com/static/nft/webp/79d730a53cd44e4c8cb4048c02f3c6a9_64x64.webp",
      floor: { "1H": "0.4 BNB", "6H": "0.42 BNB", "24H": "0.44 BNB", "7D": "0.49 BNB" },
      volume: { "1H": "300 BNB", "6H": "320 BNB", "24H": "340 BNB", "7D": "390 BNB" },
      floorChange: { "1H": "-0.3%", "6H": "-1.2%", "24H": "+0.4%", "7D": "+5.0%" },
      volumeChange: { "1H": "+0.3%", "6H": "-0.8%", "24H": "-0.9%", "7D": "+9.0%" }
    },
    {
      rank: 5,
      name: "Lazy Doge",
      logo: "https://public.nftstatic.com/static/nft/webp/b8b7c6ac4743492db019ce26f7347462_64x64.webp",
      floor: { "1H": "0.5 BNB", "6H": "0.55 BNB", "24H": "0.6 BNB", "7D": "0.7 BNB" },
      volume: { "1H": "500 BNB", "6H": "530 BNB", "24H": "560 BNB", "7D": "610 BNB" },
      floorChange: { "1H": "+0.5%", "6H": "-2.0%", "24H": "-1.5%", "7D": "+6.5%" },
      volumeChange: { "1H": "-0.4%", "6H": "-1.0%", "24H": "+2.0%", "7D": "-12.0%" }
    },

    {
      rank: 6,
      name: "Cyber Monkey",
      logo: "https://public.nftstatic.com/static/nft/webp/nft-cex/S3/1680493515590_8ywz878o4pnlu88gjs6jkj6wli6q15il_64x64.webp",
      floor: { "1H": "0.6 ETH", "6H": "0.65 ETH", "24H": "0.7 ETH", "7D": "0.8 ETH" },
      volume: { "1H": "550 ETH", "6H": "580 ETH", "24H": "610 ETH", "7D": "660 ETH" },
      floorChange: { "1H": "-0.1%", "6H": "+0.9%", "24H": "-1.2%", "7D": "+7.1%" },
      volumeChange: { "1H": "-0.2%", "6H": "+0.7%", "24H": "-1.3%", "7D": "+10.0%" }
    },
    {
      rank: 7,
      name: "Baby Shark",
      logo: "https://public.nftstatic.com/static/nft/webp/2c66a6e10df04bbea3eff518e06f8d73_64x64.webp",
      floor: { "1H": "0.7 ETH", "6H": "0.75 ETH", "24H": "0.8 ETH", "7D": "0.9 ETH" },
      volume: { "1H": "480 ETH", "6H": "500 ETH", "24H": "530 ETH", "7D": "590 ETH" },
      floorChange: { "1H": "+0.2%", "6H": "-1.7%", "24H": "-0.8%", "7D": "-5.3%" },
      volumeChange: { "1H": "+0.1%", "6H": "-0.5%", "24H": "-1.2%", "7D": "+7.8%" }
    },
    {
      rank: 8,
      name: "Pixel Wolf",
      logo: "https://public.nftstatic.com/static/nft/webp/nft-cex/S3/1667874736142_4iimvwacp4r3v0khr6j8sr2tlzyxs8zr_64x64.webp",
      floor: { "1H": "0.8 ETH", "6H": "0.85 ETH", "24H": "0.9 ETH", "7D": "1.0 ETH" },
      volume: { "1H": "400 ETH", "6H": "420 ETH", "24H": "440 ETH", "7D": "500 ETH" },
      floorChange: { "1H": "-0.6%", "6H": "+1.1%", "24H": "-0.9%", "7D": "+6.2%" },
      volumeChange: { "1H": "-0.2%", "6H": "-0.9%", "24H": "+2.2%", "7D": "+11.0%" }
    },
    {
      rank: 9,
      name: "Fancy Cow",
      logo: "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1682033530535_lkmg1k1bka9lpnxfxret1qtlan852luy_64x64.webp",
      floor: { "1H": "0.9 ETH", "6H": "0.95 ETH", "24H": "1.0 ETH", "7D": "1.1 ETH" },
      volume: { "1H": "350 ETH", "6H": "370 ETH", "24H": "390 ETH", "7D": "450 ETH" },
      floorChange: { "1H": "+0.4%", "6H": "-0.6%", "24H": "-1.3%", "7D": "-8.0%" },
      volumeChange: { "1H": "-0.1%", "6H": "-0.4%", "24H": "+1.7%", "7D": "+9.3%" }
    },
    {
      rank: 10,
      name: "Shadow Fox",
      logo: "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687932850971_35r93kq25q763r0zvu5o5lg7id729hej_64x64.webp",
      floor: { "1H": "1.0 ETH", "6H": "1.1 ETH", "24H": "1.2 ETH", "7D": "1.3 ETH" },
      volume: { "1H": "600 ETH", "6H": "650 ETH", "24H": "700 ETH", "7D": "800 ETH" },
      floorChange: { "1H": "+0.3%", "6H": "-1.4%", "24H": "+1.0%", "7D": "-9.5%" },
      volumeChange: { "1H": "+0.3%", "6H": "-1.5%", "24H": "+3.1%", "7D": "-13.5%" }
    }
  ],

  top: [
    {
      rank: 1,
      name: "Mutant Ape",
      logo: "https://public.nftstatic.com/static/nft/webp/5966121f53a842f793d02d24cf196e1c_64x64.webp",
      floor: { "1H": "13 ETH", "6H": "13.2 ETH", "24H": "13.5 ETH", "7D": "14 ETH" },
      volume: { "1H": "1000 ETH", "6H": "1100 ETH", "24H": "1200 ETH", "7D": "1300 ETH" },
      floorChange: { "1H": "+0.3%", "6H": "+0.8%", "24H": "+1.5%", "7D": "+2.1%" },
      volumeChange: { "1H": "+0.1%", "6H": "+1.1%", "24H": "+1.4%", "7D": "+3.2%" }
    },
    {
      rank: 2,
      name: "Crypto Penguin",
      logo: "https://public.nftstatic.com/static/nft/webp/nft-cex/S3/1680061515043_2sub8ue4thcn1fqsv7okm3eg1sow6doo_64x64.webp",
      floor: { "1H": "10 ETH", "6H": "10.2 ETH", "24H": "10.5 ETH", "7D": "11 ETH" },
      volume: { "1H": "900 ETH", "6H": "950 ETH", "24H": "1000 ETH", "7D": "1100 ETH" },
      floorChange: { "1H": "-0.2%", "6H": "+0.7%", "24H": "-1.3%", "7D": "+1.9%" },
      volumeChange: { "1H": "+0.2%", "6H": "-1.0%", "24H": "+1.6%", "7D": "-2.9%" }
    },
    {
      rank: 3,
      name: "Alien Club",
      logo: "https://public.nftstatic.com/static/nft/webp/nft-cex/S3/1667833269373_dg25y9sujcyv3fni4aqpdm90wf22rgae_64x64.webp",
      floor: { "1H": "9 ETH", "6H": "9.1 ETH", "24H": "9.3 ETH", "7D": "9.7 ETH" },
      volume: { "1H": "850 ETH", "6H": "900 ETH", "24H": "950 ETH", "7D": "1000 ETH" },
      floorChange: { "1H": "+0.1%", "6H": "-0.5%", "24H": "+1.0%", "7D": "-1.8%" },
      volumeChange: { "1H": "+0.3%", "6H": "-0.9%", "24H": "+1.2%", "7D": "-2.5%" }
    },
    {
      rank: 4,
      name: "Galaxy Punks",
      logo: "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1685642530493_5vccjl2p8zf4olfz4lhpa27bskb5avlr_64x64.webp",
      floor: { "1H": "8 ETH", "6H": "8.1 ETH", "24H": "8.3 ETH", "7D": "8.6 ETH" },
      volume: { "1H": "700 ETH", "6H": "750 ETH", "24H": "800 ETH", "7D": "900 ETH" },
      floorChange: { "1H": "+0.3%", "6H": "-0.8%", "24H": "+1.4%", "7D": "-2.0%" },
      volumeChange: { "1H": "-0.1%", "6H": "+0.7%", "24H": "-1.5%", "7D": "+3.0%" }
    },
    {
      rank: 5,
      name: "Meta Wolves",
      logo: "https://public.nftstatic.com/static/nft/webp/61ca8908746a49518229060820474f2e_64x64.webp",
      floor: { "1H": "7 ETH", "6H": "7.2 ETH", "24H": "7.4 ETH", "7D": "7.8 ETH" },
      volume: { "1H": "650 ETH", "6H": "700 ETH", "24H": "750 ETH", "7D": "800 ETH" },
      floorChange: { "1H": "-0.2%", "6H": "+0.6%", "24H": "-1.2%", "7D": "+2.3%" },
      volumeChange: { "1H": "+0.1%", "6H": "-0.5%", "24H": "+1.3%", "7D": "-2.8%" }
    },
    {
      rank: 6,
      name: "Dragon Squad",
      logo: "https://public.nftstatic.com/static/nft/webp/nft-cex/S3/1674160231524_iprtxuwr3k0i4mkau3lhk8ig6nd4hvkv_64x64.webp",
      floor: { "1H": "6 ETH", "6H": "6.1 ETH", "24H": "6.3 ETH", "7D": "6.7 ETH" },
      volume: { "1H": "500 ETH", "6H": "550 ETH", "24H": "600 ETH", "7D": "700 ETH" },
      floorChange: { "1H": "+0.4%", "6H": "-1.1%", "24H": "+1.7%", "7D": "-3.1%" },
      volumeChange: { "1H": "-0.2%", "6H": "+0.8%", "24H": "-1.8%", "7D": "+4.0%" }
    },
    {
      rank: 7,
      name: "Samurai Apes",
      logo: "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1680758170366_wmcb8c1tmjosv0n67f3wkhpng5hho7ib_64x64.webp",
      floor: { "1H": "5 ETH", "6H": "5.1 ETH", "24H": "5.3 ETH", "7D": "5.6 ETH" },
      volume: { "1H": "450 ETH", "6H": "500 ETH", "24H": "550 ETH", "7D": "600 ETH" },
      floorChange: { "1H": "-0.3%", "6H": "+0.9%", "24H": "-1.6%", "7D": "+2.8%" },
      volumeChange: { "1H": "+0.2%", "6H": "-1.0%", "24H": "+1.9%", "7D": "-3.7%" }
    },
    {
      rank: 8,
      name: "Moon Cats",
      logo: "https://public.nftstatic.com/static/nft/webp/952b729ae5104047809ebc62b06740f6_64x64.webp",
      floor: { "1H": "4 ETH", "6H": "4.1 ETH", "24H": "4.3 ETH", "7D": "4.6 ETH" },
      volume: { "1H": "350 ETH", "6H": "400 ETH", "24H": "450 ETH", "7D": "500 ETH" },
      floorChange: { "1H": "+0.5%", "6H": "-1.3%", "24H": "+1.8%", "7D": "-3.4%" },
      volumeChange: { "1H": "-0.3%", "6H": "+1.2%", "24H": "-2.0%", "7D": "+4.1%" }
    },
    {
      rank: 9,
      name: "Pixel Heroes",
      logo: "https://public.nftstatic.com/static/nft/webp/nft-cex/S3/1674194439942_o5yia6cpospatwt600hpjhdql4a74dsf_64x64.webp",
      floor: { "1H": "3 ETH", "6H": "3.1 ETH", "24H": "3.3 ETH", "7D": "3.5 ETH" },
      volume: { "1H": "300 ETH", "6H": "320 ETH", "24H": "350 ETH", "7D": "400 ETH" },
      floorChange: { "1H": "-0.2%", "6H": "+0.6%", "24H": "-1.1%", "7D": "+2.0%" },
      volumeChange: { "1H": "-0.1%", "6H": "+0.5%", "24H": "-1.2%", "7D": "+2.5%" }
    },
    {
      rank: 10,
      name: "Punk Samurai",
      logo: "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1680270245196_qd7qqdk6dweodr25l1v3na6qa4ut5x32_64x64.webp",
      floor: { "1H": "2 ETH", "6H": "2.1 ETH", "24H": "2.3 ETH", "7D": "2.5 ETH" },
      volume: { "1H": "250 ETH", "6H": "270 ETH", "24H": "300 ETH", "7D": "350 ETH" },
      floorChange: { "1H": "-0.1%", "6H": "+0.5%", "24H": "-1.0%", "7D": "+1.9%" },
      volumeChange: { "1H": "+0.0%", "6H": "-0.6%", "24H": "+1.1%", "7D": "-2.3%" }
    }
  ]
};
