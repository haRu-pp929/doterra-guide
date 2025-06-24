    const app = Vue.createApp({
      data() {
        return {
          menus: [
          {
              title: 'ご登録後の 60日ガイド一覧',
              items: [],
              submenus: [
                {
                  title: '情報',
                  items: [
                    { text: 'ナチュラルソリューションズの理解', link: 'https://drive.google.com/file/d/1eE-bkRKnNxB6qWyfgUVu_06j8b57bKAq/view' },
                    { text: 'ウェルネスピラミッドに沿ったライフスタイル1', link: 'https://share.doterra.com/b/INK1P' },
                    { text: 'ウェルネスピラミッドに沿ったライフスタイル2', link: 'https://share.doterra.com/v/Japan/s/KIBCC?viewIndex=2' },
                    { text: 'doTERRA TIMESを開く', link: 'https://www.doterra-info.jp/' }
                  ]
                },
                {
                  title: 'ショッピング',
                  items: [
                    { text: 'My doTERRA オフィスを開く', link: 'https://login.doterra.com/us/en-us/sign-in' },
                    { text: 'LRPを理解', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?share=share%2Calbum%2CI5Q14&column=document&id=hnlvpqhj1d66132q5scma5ru7v&suffix=pdf&print=1' },
                    { text: 'OTG製品を注文', link: '#about' },
                    { text: 'NFR製品を注文', link: '#about' },
                    { text: '上手なポイントのため方・使い方を教えてもらう', link: '#about' }
                  ]
                },
                {
                  title: '製品',
                  items: [
                    { text: '基本のオイルの話を聞く', link: '#about' },
                    { text: '栄養補助について学ぶ', link: '#about' },
                    { text: 'ドテラスキンケアの説明を聞く', link: '#about' }
                  ]
                },
                {
                  title: 'アロマトリートメント',
                  items: [
                    { text: 'アロマタッチ・ハンドタッチについて知る', link: '#about' },
                    { text: 'Dr.Me(スパインセラピー )を学ぶ', link: '#about' }
                  ]
                },
                {
                  title: 'システム WAの方',
                  items: [
                    { text: 'システムの理解', link: '#about' },
                    { text: 'ボーナスの受け取り方法を学ぶ', link: '#about' }
                  ]
                }
              ]
            },
          {
              title: 'doTELLAについて',
              submenus: [
                {
                  title: '登録キット',
                  items: [
                     { text: '新規登録キット一覧（画像）',link: 'https://drive.google.com/file/d/1J3bJ9jT37y-44fd3fYG1KQ6HL472G9jd/view'},
                     { text: '登録キット | doTERRA TIMES',link: 'https://www.doterra-info.jp/product_category/enrollment-kit/'},
                     { text: 'IKISE登録キット（A4 PDF）',link: 'https://drive.google.com/file/d/11BmCXk5bPm_tiE_Ov4TyJOmPk8g51R0N/view?usp=sharing'},
                     { text: 'Laetitiaチーム ご入会について',link: 'https://www.canva.com/design/DAFuZU9B2SM/aLETP3pa-t7fvr1r0ZXwrw/view?utm_content=DAFuZU9B2SM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd1d7758918'},
                     { text: 'LCってなぁに？（PDF）',link: 'https://drive.google.com/file/d/1NpvVsYI0nYt5EKDD8rmkMMi-ya1RotlH/view'},
                     { text: '登録キャンペーン（〜6/1）①',link: 'https://www.canva.com/design/DAGkmHOEbG0/PP4e02bFHWMwQ5TqUfxMXw/edit?utm_content=DAGkmHOEbG0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'},
                     { text: '登録キャンペーン（〜6/1）②',link: 'https://www.canva.com/design/DAGkmKoOw0A/mQFmpAbnbTNKUvQEOWGdeQ/edit?utm_content=DAGkmKoOw0A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'},
                     { text: 'パスポートプログラム2025（ドテラ）',link: 'https://doterra-info.jp/lp/passport-program/2025/guide/'}
                  ]
                },
                {
                  title: 'おすすめ動画集',
                  items: [
                    { text: '動画集(愛用者用)', link: 'https://e-avision.com/movies/' },
                    { text: '動画集(ビジネス)', link: 'https://e-avision.com/belief/' },
                    { text: 'ピジョンブック', link: 'https://pigeonbook.biz/' },
                    { text: 'サプリメント', link: 'https://pigeonbook.biz/20221114-s01/' },
                    { text: 'YouTube動画集', link: 'https://youtube.com/playlist?list=PL_XcQNEPfXUvNrBHUrlj49BKd_WXbFcM-&si=Ee-4V8Nv5JansFTp' },
                    { text: '各種資料', link: 'https://share.doterra.com/v/Japan/landing?viewIndex=0' },
                    { text: 'ドテラをお伝えするために', link: 'https://drive.google.com/file/d/1bvvL8WqwbApDZOAMxAJ8Uw90fIpkjswE/view' },
                  ]
                },
                {
                  title: '公式リソース',
                  items: [
                    { text: 'ドテラ公式サイト', link: 'https://www.doterra.com/JP/ja_JP?gad_source=1&gclid=Cj0KCQiA1Km7BhC9ARIsAFZfEIs28Zc27POvb_ntG5vSzW1nIzJBOGQuUaFEHQZzf9lqqHjJ0fnI_90aAuLJEALw_wcB' },
                    { text: 'ドテラタイムズ', link: 'https://www.doterra-info.jp/' },
                    { text: 'Facebook', link: 'https://www.facebook.com/doterrajp/?locale=ja_JP' },
                    { text: 'Instagram', link: 'http://instagram.com/doterrajapan/' },
                    { text: 'X(旧Twitter)', link: 'https://x.com/i/flow/login?redirect_after_login=%2FdoTERRA_JAPAN' },
                    { text: 'YouTube', link: 'https://www.youtube.com/channel/UC1HSq1zOFYyQiI4nK-inmeQ' }
                  ]
                }
              ]
            },
            {
              title: 'エッセンシャルオイル活用法',
              items: [],
              submenus: [
                {
                  title: 'ウキウキ・ワクワク',
                  items: [
                    { text: '波動 エッセンシャルオイルについて', link: 'https://drive.google.com/file/d/1FRIW-FpgGLCYL_QzDTTVXwQRhpIVv9yR/view?usp=sharing' },
                    { text: '波動一覧 MHZ一覧', link: 'https://drive.google.com/file/d/1o9kXf2ICF8CNMB9PzQUykQpqgktZDOHY/view?usp=sharing' },
                    { text: 'IKISE プレゼン資料', link: 'https://drive.google.com/file/d/1dgLFZ0oYtzud9pmjPkoUd-Y7XGTZdzip/view?usp=sharing' },
                    { text: '天使のささやき 自己肯定感が驚くほど上がる', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?v=Japan&portalType=v%2FJapan&column=document&id=n9p7sfnugt4qh7u3enjvmjkd7q&suffix=pdf&print=1' },
                    { text: 'アロマ数秘術 愛と叡智の開運メソッド', link: 'https://drive.google.com/file/d/12SAb-6zNAJJTv1dSgfkEySvJcKIYNO_a/view?usp=sharing' }
                  ]
                },
                {
                  title: 'ワークショップ',
                  items: [
                    { text: '基本の作り方.jpg', link: 'https://drive.google.com/file/d/1Q2gjCjtO_y5LOSIdJSDJXrPrsLtKmxU1/view' },
                    { text: 'ドテラライフ：日用品＆オイルの取り入れ方', link: 'https://drive.google.com/file/d/1xGHM5XrfkpI9eSmcE1IFtXJjskRAum-_/view' },
                    { text: 'ワークショップ：5月度サロン解放日', link: 'https://www.canva.com/design/DAGkS8h9__0/LWsE-7gjdTxn94i8SSqyiw/edit?utm_content=DAGkS8h9__0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: '花粉症対策：くしゃみ・鼻水・鼻づまり', link: 'https://www.canva.com/design/DAF8uwN8gFo/0Zznw-XpDqm1KuwLpUiFqQ/view?utm_content=DAF8uwN8gFo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2c23b2f26d' },
                    { text: 'リップクリーム レシピ', link: 'https://www.canva.com/design/DAF5dm-8yv8/YRffu1MLwZ72F8NDJxKe3g/view?utm_content=DAF5dm-8yv8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he41dfd5778' },
                    { text: 'リップグロス レシピ', link: 'https://www.canva.com/design/DAGW-is1Vic/9vhRNiXdhsDSpS0pUYZ51Q/view?utm_content=DAGW-is1Vic&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he8ebc07ba4' },
                    { text: 'リップスクラブ レシピ', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?v=Japan&portalType=v%2FJapan&column=document&id=e8dclo697d0ghe8dqg8tngr92o&suffix=pdf&print=1' },
                    { text: 'スリーピングマスク レシピ', link: 'https://www.canva.com/design/DAGLWkweaQc/ophLZGRrzwKZx9xFrrBTYQ/view?utm_content=DAGLWkweaQc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfcc6807af7' },
                    { text: 'まつ毛美容液 レシピ', link: 'https://www.canva.com/design/DAGT6B2NabI/SQe0ecOp9vuGhiTU3OWgsA/view?utm_content=DAGT6B2NabI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he29f9189ed' },
                    { text: '天使のささやき 香水レシピ', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?v=Japan&portalType=v%2FJapan&column=document&id=ant0u9uss170r13ndqkofgig2s&suffix=pdf&print=1' },
                    { text: '丹田クリーム', link: 'https://www.canva.com/design/DAGCkDNxSNI/V_LA0HLMtzP4mfYgbK7keA/view?utm_content=DAGCkDNxSNI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfd5e5a22fd' },
                    { text: '丹田クリーム（その2）', link: 'https://www.canva.com/design/DAGCkAGdn1E/VH-OI5WFRuWIKWHStN8iLg/view?utm_content=DAGCkAGdn1E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha3bfa07276' },
                    { text: 'ダイエットクリーム 脂肪燃焼レシピ', link: 'https://www.canva.com/design/DAGRXJtKkrc/l76phgcN-WqXc6PifB-NgA/view?utm_content=DAGRXJtKkrc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9a5aa486c4' },
                    { text: '柔軟剤 レシピ', link: 'https://www.canva.com/design/DAFxZzhMcAY/UnSwLq_9ltR-Ky2mCn14CA/view?utm_content=DAFxZzhMcAY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7d45550f9a' },
                    { text: 'ハッピーオーラミスト①', link: 'https://www.canva.com/design/DAGbf2ZTaR4/l4sWuBNp9ptK4A4x4qBOUA/view?utm_content=DAGbf2ZTaR4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4221985221' },
                    { text: 'ハッピーオーラミスト②', link: 'https://www.canva.com/design/DAGbfsRDiAQ/k2NM3BSlQzVPdUP4OQO2LQ/view?utm_content=DAGbfsRDiAQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb1d7e89df9' }
                  ]
                },
                {
                  title: 'お料理活用法(Instagram)',
                  items: [
                    { text: 'キッシュ（レモン・オレガノ・ローズマリー）', link: 'https://www.instagram.com/reel/DHGTOtoTbXp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
                    { text: 'サブレ（オレンジ・オレガノ・ローズマリー）', link: 'https://www.instagram.com/reel/DHInvzyzUgr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
                    { text: 'ネギ塩ダレ（レモン）', link: 'https://www.instagram.com/reel/DIbJssRTj-J/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
                    { text: 'フライドポテト（ローズマリー）', link: 'https://www.instagram.com/reel/DItEXm5THuf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
                    { text: 'ホタルイカのタイ風サラダ（ライム・レモングラス）', link: 'https://www.instagram.com/reel/DJJonnQz4hf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
                    { text: '肉に合うタレ（ジンジャー）', link: 'https://www.instagram.com/reel/DJOIaoUTt9G/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
                    { text: 'パウンドケーキ（シナモンバーク・レモン）', link: 'https://www.instagram.com/reel/DJYqa__xYWy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
                    { text: 'ココア蒸しパン（オレンジ）', link: 'https://www.instagram.com/reel/DJa6AuczL3k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
                    { text: 'ジンジャーエール（ジンジャー・シナモンバーク）', link: 'https://www.instagram.com/reel/DJlxoP2zn_U/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
                    { text: 'ヨーグルトアレンジ（オレンジ）', link: 'https://www.instagram.com/reel/DJy1G2ap1xZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
                    { text: 'ハニーチーズトースト（オレガノ）', link: 'https://www.instagram.com/reel/DKWbH8KTudC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' }
                  ]
                },
              ]
            },
            {
              title: '資料',
              items: [
              ],
              submenus: [
                {
                  title: 'カタログレッスン',
                  items: [
                    { text: '① 中田はるみさん', link: 'https://www.youtube.com/watch?v=_k86r_P138M' },
                    { text: '② 竹原ゆうこさん', link: 'https://www.youtube.com/watch?v=elgY-v9ziUY' },
                    { text: '③ 田中美香さん', link: 'https://www.youtube.com/watch?v=GE8MPkxlubg' },
                    { text: '⑤ 堺まりさん パスコード: =cx37q=t ', link: 'https://us06web.zoom.us/rec/component-page?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&action=viewdetailpage&sharelevel=meeting&useWhichPasswd=meeting&requestFrom=pwdCheck&clusterId=us06&componentName=need-password&meetingId=jLrKPA7rjOlDEgiAzyMqtYlEtv1Rkayo0Gi7wD0lO8V2Z_ejMeYCuI0YE9nEypUJ.bZSfIjz_VSODjcq6&originRequestUrl=https%3A%2F%2Fus06web.zoom.us%2Frec%2Fshare%2FPBCoAgb5NTya_LiGcYCkcKEEFrSkZwhPPu2UmWoD0wRuqiMBMOcScIQkMt3_Eh6t.lxvuOhQ5WXQEOxFE' },
                    { text: 'コンプライアンストレーニング', link: 'https://training.doterra.com/p/43e1b9' },
                    { text: 'アロマタッチ認定コース', link: 'https://training.doterra.com/p/aromatouch-technique-certification-jp' }
                  ]
                },
                {
                  title: 'エンパワード・サクセス',
                  items:[
                    { text: 'プロダクトガイド 2024 -25.pdf',link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?v=Japan&portalType=v%2FJapan&column=document&id=i99bvsi3ct1rf7cqnijb1gsg2h&suffix=pdf&print=1'},
                    { text: 'Liveガイド',link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?v=Japan&portalType=v%2FJapan&column=document&id=g5uctac20d6q15anahdrvas55a&suffix=pdf&print=1'},
                    { text: 'ウェルネス ライフスタイルチェック',link: 'https://share.doterra.com/v/Japan/album/U5TUD?display=fitView&viewIndex=0&referenceTo=&from=fitView&column=document&id=g9i7rbfepl3i95db0q795rmr44'},
                    { text: 'Buildガイド',link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?v=Japan&portalType=v%2FJapan&column=document&id=968fvgsikh0bn6gnt4drg7g86e&suffix=pdf&print=1'},
                    { text: 'Shareガイド',link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?v=Japan&portalType=v%2FJapan&column=document&id=u5sdculg3l26t80o53ntugt57f&suffix=pdf&print=1'},
                    { text: 'Launchガイド',link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?column=document&id=hvrlgk8l22npvha3p77fl1relv&suffix=pdf&print=1'},
                    { text: 'ツールズライブラリー サクセスチェックイン',link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?column=document&id=5r4iutkk7l4v2r6a36ojfh4lo6&suffix=pdf&print=1'},
                    { text: 'ランクプランナー プレミア・シルバー',link: 'https://share.doterra.com/v/Japan/album/VQIFM?display=fitView&viewIndex=0&gSortingForward=false&gOrderProp=name&referenceTo=&from=fitView&column=document&id=ecvlcgvii545t00snvshkr1c6d'},
                    { text: 'Healthy Can Be Simple ガイド',link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?column=document&id=3r9rulj37u4qfgv7b4m9iv0lc6&suffix=pdf&print=1'}
]
                },
                {
                  title: 'SNS事前準備・chatGTPダウンロード',
                  items: [
                    { text: 'instagram 事前準備の手引き', link: 'https://drive.google.com/file/d/1r7TLJ5Jt7W0nXuTnnfE-Bxhqlf8KkwSS/view?usp=sharing' },
                    { text: 'instagram フォロワーを増やすための名前の作り方', link: 'https://drive.google.com/file/d/1kFCDknf5BbuLrleOrM71q8Lqakw5_P4Z/view?usp=sharing' },
                    { text: 'chatGTP（PC版）', link: 'https://chat.openai.com/' },
                    { text: 'chatGTP（iOS版 App Store）', link: 'https://apps.apple.com/app/chatgpt/id6448311069' },
                    { text: 'chatGTP（Android版 Google Play）', link: 'https://play.google.com/store/apps/details?id=com.openai.chatgpt' }
                  ]
                },
                {
                  title: '10のこと ＆ 役に立つ情報',
                  items: [
                    { text: 'ゼラニウム（PDF）', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?v=Japan&portalType=v/Japan&column=document&id=5q7qikpcdd1vdq9e7kic1r7nh6&suffix=pdf&print=1' },
                    { text: 'ゼラニウムの５大効能！リラックスや美肌効果に期待', link: 'https://plant-gift.jp/geranium-kounou' },
                    { text: 'グレープフルーツ（PDF）', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?v=Japan&portalType=v%2FJapan&column=document&id=i1kfiih7h15b12od7hsorhre6f&suffix=pdf&print=1' },
                    { text: 'ドテラのグレープフルーツの甘くてほろ苦い効果効能の魅力', link: 'https://doterrabu.com/grapefruit/' },
                    { text: 'オレンジ（PDF）', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?v=Japan&portalType=v%2FJapan&column=document&id=6hhclajhph1r1bsvqb7dofcd3o&suffix=pdf&print=1' },
                    { text: 'ライム（PDF）', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?column=document&id=0lu3onmsdr4qfmep7qb0g2sjto&suffix=pdf&print=1' },
                    { text: 'オンガード（FAQ）', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?column=document&id=7ol9lkjvmu0kdsbs1meod0qkfg&suffix=pdf&print=1' },
                    { text: 'ラベンダー（PDF）', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?column=document&id=7l2spve8f04ldgbvt2gv63mrv5&suffix=pdf&print=1' },
                    { text: '植物のキレーション効果', link: 'https://drive.google.com/file/d/1XrrpToR7qBlm5ubxpKfdOjoI7qrd99ie/view?usp=sharing' },
                    { text: 'ORAC値（抗酸化力）', link: 'https://drive.google.com/file/d/1I49LifBZOB6hEX9AA8GF5LNDgHgN0eKp/view?usp=sharing' },
                    { text: 'オイルの生活への取り入れ方', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?v=Japan&portalType=v%2FJapan&column=document&id=vhoi32uofd6nh4hc8jac1jre7j&suffix=pdf&print=1' },
                    { text: 'ドテラルーティーン（PDF）', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?column=document&id=2b08qg61k542tlvufuc2mauhr3&suffix=pdf&print=1' }
                  ]
                }
              ]
            },
            {
              title: 'ZOOMアーカイブ',
              submenus: [
                {
                  title: 'オレガノ編',
                  items: [
                    { text: 'クイズ（オレガノ編）', link: 'https://www.canva.com/design/DAGlzTpbn5U/27xhExnFnpcx29h-tiGrpg/edit?utm_content=DAGlzTpbn5U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: 'クイズの答え（オレガノ編）', link: 'https://www.canva.com/design/DAGlzbbEsRs/SbcxcZ2tF6MgbYAeUl3HyQ/edit?utm_content=DAGlzbbEsRs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: '動画（YouTube・48秒）', link: 'https://youtu.be/uOh4CyEy2hU?si=WgtP6CTb27WXUtQ-' },
                    { text: '10のこと（PDF）', link: 'https://www.canva.com/design/DAGl0HEDh_4/8Q2haiNd8BAxSk_BbNyW7w/edit?utm_content=DAGl0HEDh_4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: 'スライド（このスライドに沿って話す）', link: 'https://www.canva.com/design/DAGlzwZlZtw/RgRToVX2Q21mQFAzCEDjsw/edit?utm_content=DAGlzwZlZtw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: 'doTERRAスタジオ（動画・55分26秒）', link: 'https://youtu.be/BfDRfh9vJcI' }
                  ]
                },
                {
                  title: 'オレンジ編',
                  items: [
                    { text: 'クイズ（オレンジ編）', link: 'https://www.canva.com/design/DAGnA8BUJVA/aBzXrwJMlRWXiVrNCZ5h1A/edit?utm_content=DAGnA8BUJVA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: 'クイズの答え（オレンジ編）', link: 'https://www.canva.com/design/DAGnBP9m-Fo/mFRRHyynl7wVsnJCNHjV_w/edit?utm_content=DAGnBP9m-Fo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: '動画（YouTube・38秒）', link: 'https://youtu.be/owCYQjcwNiA?si=UUbVKDdDFlGmgvCk' },
                    { text: '10のこと（PDF）', link: 'https://share.doterra.com/pdfviewer/viewer/viewer.html?v=Japan&portalType=v%2FJapan&column=document&id=6hhclajhph1r1bsvqb7dofcd3o&suffix=pdf&print=1' },
                    { text: 'スライド（このスライドに沿って話す）', link: 'https://www.canva.com/design/DAGnBIS0568/Ia0rDuLq5KeTH2-PcXIzZg/edit?utm_content=DAGnBIS0568&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: 'doTERRAスタジオ（動画・51分56秒）', link: 'https://youtu.be/Of_qUQ2FNKs' }
                  ]
                },
                {
                  title: 'スペアミント編',
                  items: [
                    { text: 'クイズ（スペアミント編）', link: 'https://www.canva.com/design/DAGo02DUAvY/nwloPs6w5QKqyK4VPFXHjw/edit?utm_content=DAGo02DUAvY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: 'クイズの答え（スペアミント編）', link: 'https://www.canva.com/design/DAGo0-TTFWE/fDpZ9jmiwTXzi2icfneJow/edit?utm_content=DAGo0-TTFWE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: '動画 youtube', link: '#about' },
                    { text: '10のこと（PDF）', link: 'https://www.canva.com/design/DAGo03fJGxQ/dkFkWL2yYuiaevZHBaeTKg/edit?utm_content=DAGo03fJGxQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: 'スライド①（このスライドに沿って話す）', link: 'https://www.canva.com/design/DAGo1KnXK9U/UvCO-gkeIxMwX4PcZyVJ2Q/edit?utm_content=DAGo1KnXK9U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: 'スライド②（波動の話し）', link: 'https://www.canva.com/design/DAGo1Pa7c2U/AAmELfbievEPrKRZU1NU4Q/edit?utm_content=DAGo1Pa7c2U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: 'doTERRAスタジオ（動画・57分26秒）', link: 'https://youtu.be/E0muGyy1Oac' }
                  ]
                },
                {
                  title: 'ティーツリー編',
                  items: [
                    { text: 'クイズ（ティーツリー編）', link: 'https://www.canva.com/design/DAGlzTpbn5U/27xhExnFnpcx29h-tiGrpg/edit?utm_content=DAGlzTpbn5U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: 'クイズの答え（ティーツリー編）', link: 'https://www.canva.com/design/DAGlzbbEsRs/SbcxcZ2tF6MgbYAeUl3HyQ/edit?utm_content=DAGlzbbEsRs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: '動画（YouTube・48秒）', link: 'https://youtu.be/uOh4CyEy2hU?si=WgtP6CTb27WXUtQ-' },
                    { text: '10のこと（PDF）', link: 'https://www.canva.com/design/DAGl0HEDh_4/8Q2haiNd8BAxSk_BbNyW7w/edit?utm_content=DAGl0HEDh_4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: 'スライド（このスライドに沿って話す）', link: 'https://www.canva.com/design/DAGlzwZlZtw/RgRToVX2Q21mQFAzCEDjsw/edit?utm_content=DAGlzwZlZtw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
                    { text: 'doTERRAスタジオ（準備中）', link: '#about' }
                  ]
                },
              ]
            },
            {
              title: '販売店のご紹介',
              submenus: [
                {
                  title: 'エッセンシャルオイル用品、関連書籍',
                  items: [
                    { text: 'NH&S(ナチュラルハーモニー&サイエンス)', link: 'https://www.nhs-pub.jp/' },
                    { text: 'テラツールズ', link: 'https://terratools-shop.com/' }
                  ]
                }
              ]
            },
          ]
        };
      }
    });

    app.mount('#app');