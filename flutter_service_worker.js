'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a58076f502c95d130cf80527892228f0",
".git/config": "c323339663d2912ef4bac2326919c076",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b76deafb61a140154e0be831f995ff12",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "58c2835a151bccc6c925c9c1ec0198e4",
".git/logs/refs/heads/main": "cb01d1fe02727191b6244dd15ea6ccc7",
".git/logs/refs/remotes/origin/main": "1408e99106c31900b16d83ac757cf558",
".git/objects/00/258f65335f0a95c01972e4a8a282cbf084406e": "18adc122cb6eeface2106d471cf7e54c",
".git/objects/00/cf0df35454a4dc75543e6cf905ad07901206ca": "99171eaca0e0b4bffe327573e5715d0d",
".git/objects/01/4bbf54dc2f578cb0b3115a8bc224b94062a4b9": "a5750514dd445a779d507fff91f2f56d",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/78f060da2f99992483fe6669433464b046d1bc": "57de34ff6a7b58382851d1bcb9b30791",
".git/objects/07/347d2cca67cb48f94b56c9b9c8bc8020b56098": "80d0c7f9ca16868f8b4e0b2015b29785",
".git/objects/07/812e567e50bb538615dca3238d16ab8b21ffce": "ba042ff3b76dbf0509397d137f34a126",
".git/objects/0a/0e6322624da857e4cc0775217787d26e7efbb6": "d015129d787113866b679b91a4297a55",
".git/objects/0a/8b663733a213aae902bce93246f53938df929f": "02b4eb745704fd2bfb45db08783a2c00",
".git/objects/0a/f27bdee3edc655007f15284ab46cd3c2feef8c": "83942d4726939b481008f7adf98318f1",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/fe0607302067c3d8670aa95dce4a1f1c22e6d9": "70fed17f68012f857c923b91c55bd065",
".git/objects/0f/e9ce51120220b786fecd34d743d03eddc15151": "410dfbba5c9c93b110e6ce52888635fe",
".git/objects/11/3162d61b38b6f2fd74d4de6e51f19f463e6eef": "8a26625312c0a21894f5cfb105a25cf0",
".git/objects/11/825bf99e289f5d4927d2bc0aa9dec6e8d098fe": "1625b30c2102dbaa4f46dc8d9ccc1985",
".git/objects/16/d72571b6e489e37ce34cee89a75aa12483406c": "2237d5ff2980fb6677f11cd9ff401f89",
".git/objects/18/3ec8697eeae8d48ba5a3782b4be7bd40eba807": "8c759014a9ade80ef90b47171d9ccf3e",
".git/objects/1a/403c80604306401137edbb53e380a33a4d9883": "495bc263499fd2b8848d112a851a4dfc",
".git/objects/1b/9b71e24fa88c9a06f093378ea08855830982b0": "817adeef9150f2b337146eed0cd6ba08",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/4663b3299696ff1a40bbebab6271ff5addb9ec": "ce2e16d03d41eab6ce1fbb81a3b2c528",
".git/objects/22/c8ed4479947a93c35d0ebaebc9053023e5ba04": "aab19a1b4a14145c3ca4ce8e9f0a366b",
".git/objects/25/23aa8b0a95d6c202180006eb9ce16a5af5a95e": "2d785f641274797593635dba024541fa",
".git/objects/25/58200142c56b256fa295a6b24ab639fb9b1ae7": "cd43beabfc79bd6ec74490f23af1e31f",
".git/objects/25/f291d913f5e4e644359d43124603c466b9f3e1": "dae2dbcde042731491b9911cef77d23d",
".git/objects/2b/a0d865eea28693550625bcbe7e30f4fe561fab": "b2c3fbaeeb5d320063d4d7583dd628c4",
".git/objects/2f/0f6ba56492e02e0fd7e4b65ee7afe37007e8b5": "780af8c6f4fee729096e6fea8076d333",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/2f/9d6511fc5d5f225922d697d1e48e607988693d": "3390f9021509de07b1f452b0ce855086",
".git/objects/31/94be62ef47c5584df79ffe2d3e74b7927934e7": "4e8e107ffd3e07b6305f1e0b9aaf1bcf",
".git/objects/34/808cf360e325c196d2bcea00be91571bed4c56": "eb83909335f845b6ad3a06ee68a8b503",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/0f21ec1558619f2e46bd80d24397541fc2a476": "aa381baa9e7a49c2d06edfa5211a2ba3",
".git/objects/39/3070cf080aa228b9040c7ceb586c3160b9dd02": "1837536cff808cc654c070e5b187a50a",
".git/objects/3b/13edff9c7baa142ac6fb56bd4cae4fdbd84172": "ad9936fc56c066b02307af50c8d6b1d4",
".git/objects/3b/819e8c701dad4115380ae20efa54b41117ada4": "fa989d94652cb7718f60d93aa1d2bbd2",
".git/objects/3f/5b88226cd72d8fbfd366de1a6564fade01a788": "bc19fbafaecc151ce0630ddb47b904f0",
".git/objects/3f/bab8e177df1867060903044eec185a237079f0": "5ec772e3a102b846bc9907c51c94485e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/914a32fb83630dac884aeeb2ad90e9ab92c6e2": "5c3fc6038c22b2d133e6e63a8cc666b8",
".git/objects/4f/12261f197b8f3d53ba919fe2bcc6fcd17c9d98": "d06a86db6ab67e362dcc4d1ad850d5bb",
".git/objects/50/fb555604fa704f0e4b8ab52bda74313d18f5a5": "cfcd117b5a2c4da90e9d49faecb98930",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/9429c35598b77c34aab99b848fe4933df5a721": "5eac3bc82285e95f12e0378d37f209c2",
".git/objects/55/6ed41c8c5468bd1df21b5b8b315d592b0fca31": "835d98e455cf215cbbd08d0756b9d1bd",
".git/objects/5d/07453b5d06a79aaec0b4acdd033a866b241789": "fa151a158e2b35ffa08b70475d28daff",
".git/objects/5d/de3a71443e77b770fa6448503e0b64eb5abda1": "e0b071c41369e5ae6eeb21c1b333d532",
".git/objects/5e/1740c371d7981c466e0a4bf4057ff46bff465a": "524db2b85ebf6902bb60c131fb7fa36f",
".git/objects/5f/63e1e7ae5cdc33c34bcdab0caa910b15efe371": "d8a57eda036bb2063a1e49ec76931087",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/1d20c41e2d9a604715f8f50120b71941646113": "9083fd7f5389e5c06734cbab132af6a3",
".git/objects/63/703f31e117b760a8b60d7cf3cb13187ea82029": "5fe718c21559cfae65318fe14d45f62f",
".git/objects/64/3c0a3c4cfa029d9b4638a7ab1a86c4236d999b": "a4fdc26935391f4d0cee3500a7ddf3c6",
".git/objects/64/76f320ee1fef3e9c74944157ac09f40fcc5a30": "7d69c3da5830d2bea401701e033673bb",
".git/objects/64/8658c793cbe765607ad0ae62532233d0120470": "721f0ca9aaf8287a45582192b587e8b4",
".git/objects/65/2cf65eee44f030bf3eec4c32aa6d4c34e56461": "d36c4dcd25435b11df482dcc5f3be9b7",
".git/objects/68/4f4b2c0094ec450ba00c4503232834a6daa7e9": "0fa060376244e45dad5299c933ea7205",
".git/objects/68/78d60955dfad86b7348bbf77bf2c5bac2ac241": "f6895cc1e3349ed1dbaca57ce1ef7c47",
".git/objects/68/ec2678923e27fa44ac2fd3c95629e2aad1e0e3": "1b513576af56215609dde28846ef43fa",
".git/objects/6a/47df4237844190bdd3c15bed73c88f15f06660": "5bb47558da21abc8905bbdd391b94fbb",
".git/objects/6b/a38b85f224bb401f7e09741fb9877fcd96b1b4": "e5a264c99bf80930aafd9275b784bc00",
".git/objects/6b/be29b244cea1f275693ed3065ee37a48e5a1c6": "f4fced38e41ff5fea8b8f9f4db5d9fdb",
".git/objects/6c/1c4234f7ad2e4ef323431a5e571231366a2bab": "0629c0492fafdec8550a13bc2aebe21b",
".git/objects/6e/8d9aef9a89b3c8f82dd1e17554caaa45e05fc5": "40844a2f40003bb6121035c5fcde2ff7",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/de950a5211e30ba2d22dc04211f7172c52cb49": "248588bbd4e05eebdf6e8babb3a26d77",
".git/objects/71/46ee39287b6e1cda93b13ad16649753b5e88d7": "5cef8def5e509279052a24f15e43be7a",
".git/objects/73/66fd5b185a62e854db5981e6e6954c3fe19e89": "e48de33b68a810b80e2a82b509a2df18",
".git/objects/73/7f77a1e113d61bb5e3b03b37fbdd792bebad00": "c9f32414819b0d4e0f13c9c186f02d65",
".git/objects/74/4a42333cd7ca3e069ad1d2cc1809c54b7cc866": "f33b3afd5ca82e4b9a28f9e7b32c8267",
".git/objects/79/7a28f625015713c80e4c202121d49cbeaf6697": "ac52f8b37b1824ffbf637170dcaf22ba",
".git/objects/7d/d3985237e248f17661abd3dc2023f1dae634ac": "5c567a26b467ba922028dab22fb04be4",
".git/objects/80/dc9df0dc48d00f0a248c238e7448ee4f7743d0": "990b968d81dd8adf28899190ee8ef011",
".git/objects/81/0bc6924fdc24f8201bb4f17dacd9d0d3f9304b": "addaf10e4dfa87e175c0e91c55e24514",
".git/objects/81/58415540fd4d85eb9f56fe67935a0f1e3d8dfb": "9ad6c79730b3964a1402e041b8eefb86",
".git/objects/83/ae80348414640e14d781179b87e086a69432e5": "100b42e0096bf26b4c8aa62c85bb044a",
".git/objects/84/453ce6fa5e376a23ba9c6b3f0b3a231bc459da": "c7a9e60481b0673b2b75080649655150",
".git/objects/86/72cbc7d851ac32e761ea3746c73e4cc61c3fa6": "4a01257a66c00425a606484b6dd5edde",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/348c4fd0fc2a6ec7febe881ca018840eb51d8c": "ff77d9ebdbfddb4a04b23ede5c12c7eb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1675cc792c89126accd5d3464f2c2cac235028": "5ad271b3b767f098d2c373852df894be",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/93/2d60827693d9e510301ebc64e7d3c684701b35": "4f08f652cbf83744335dacaf923d22a3",
".git/objects/94/0cedb355853aa686eb8e23a706ea6f7e4192c4": "f2572009d876c8365623c6b91586e8fe",
".git/objects/94/9ec8039119e102bb49e8e6be123cc681bfa256": "1fe7256b1853410b846b48c2baca06e9",
".git/objects/95/3740f6643db7582810a9b889f9757225377967": "3b57abd0e035fe9e6d8ae261f39da7f6",
".git/objects/96/52308c3a3226757aecdf360b87b6e2d8238abc": "6036b29d4384bf8f2ee0f39dc476a955",
".git/objects/99/75fe204025df9339829b34046ad34947f53a2c": "b3fc31a5dfbb99d14ac55441f5de42f8",
".git/objects/9b/6eb694a7f5e19c85eb7f8acb247738fe6512a6": "798bb0ef113d891f565a9728b3367c39",
".git/objects/a0/03d2accdc8dd6e0af0320ea173f48b57ba3f31": "7f89f556596271501d32a89b534841b1",
".git/objects/a0/caff145a5dd28d50e0d72dcde4a6d32cc663ba": "8996ce63dce58db23f3ba9193e803786",
".git/objects/a5/0245e1b06c0de84a12d65a3df25dd609552e22": "f7e2b975da934b8a6b17dd258beda841",
".git/objects/a6/c6d0f5501bbd318680f20963569e553d754a64": "49fa3c09c36e8812578a8105259aa8c7",
".git/objects/a6/e5196e3626fd4234d11f2387f64fb27c966be3": "89913ce2b075aa5144fe1629ec2ac284",
".git/objects/a7/b2f801dbec45e2c2a9b8e46be006450a0886bc": "6beb073c12d0db9f91418f3eb7fd4d4d",
".git/objects/ab/08389c4aec3b7740ce57dc43831c057ee11801": "19f68609370c29c05769d994d5f35b7e",
".git/objects/ac/bd3f694aa48d944704e7364611f553f0bbf411": "45ecef2a0f86f58280f363ed0f450831",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/193a14d0faa70aea2a15e4f6b8599be1edf67c": "a912c5bdb34ee9cdd5c82eef2bb3bb1e",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/3fe3a2245b84866fdcaf32f86193198b3357eb": "7652732a2753a68bda9bbc312ffb6e06",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/679325aef305c279f482a4af8a6e84d53e93be": "b232631e87c2022b9b066150edfcffc2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/32d5235b55cab1dc23cd2871f0c6d47a2e3d90": "80ffd8bda3e26d99a0b95adbf8e66290",
".git/objects/ba/1f01567b144ddbc603cf4ff6b24c0fe0359cf4": "33c5a77f31fb308675849a229c5dfa8d",
".git/objects/bb/25cbb6baa7782ceed5bb32b5a01417b1e5f502": "9c9a8d74c78b66884b95ce9ebed33ff1",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/e0f0c0d319852185bf353e1f5d3ee8ac151686": "695796d9c50dd9b883ab0efe52c31414",
".git/objects/c0/fb4e83a284e4aba14901e95158c069c6962669": "1631abfb410e9789a2b2867794b31811",
".git/objects/c7/4641dcffa590e105d2ee3fb417f53c5eb53916": "06ee6658a1a0b739446e5e9910990b80",
".git/objects/ca/53353422b6d76103ea5c930b42a38f2b738ea5": "5b5c7ffe51abff87b571098305979328",
".git/objects/cd/083b0b6e5460b2ed763fab8bb9349afb121234": "9cf7e554f93dd53cc61dca22e6a0ac4e",
".git/objects/d2/0f96541a6b5e6d40cb57bb8f3fe2cdaa29f6ca": "04a6d4f430e2879596c82a761c1641f9",
".git/objects/d3/884916e3c492b2a260a22c623e13607114db16": "3e5709dc3eb3c978b60b2064e80a5fa4",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/9a89bef40dcd93ceebee5180baab423023c77f": "c811cd1b8c2d35ade1f4d73e2ede72c0",
".git/objects/dc/07ae6082c56e836499f1b9a898caecfa6e9c08": "5e09b20e17b6a7f19e577b8304ecf3ed",
".git/objects/dc/2586617988351fea3617254246a1f99184d6ac": "375d9d10ec7ff8df5037d9986835c3ac",
".git/objects/de/76036681ab4c675b3732c4f883f3bfaffd78ba": "a68c964873f36d13968a2a2683ea3e5c",
".git/objects/e0/6cb1f2c2551c291ac05df74f9404f2ceba575e": "e9b5aec0ee78d2ddd029dc6d826b8a79",
".git/objects/e0/9bc7ff06ae7768424e30778436bfe2664e547a": "fd4656d27178a62912406f9495c918ad",
".git/objects/e1/c48bc2404a357fe80319b9e94dfe636cb47d68": "2b2b7b29d109b51dbe8f4f5ad9f1eb57",
".git/objects/e4/15500a84ef88dffd047c1fe18e0c4c20d90afd": "04b8b1b581875a7926a503888f91a0f9",
".git/objects/e7/0873e67a05a11cf0f14a4b904d94dec8171e29": "be59c56f26b45040e6dbfdb72e4a4e38",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e9/75b56348f8f270f860225ed782c6c574fff022": "909731f899be23e17e8f25932c266be0",
".git/objects/ea/b75edbf22bde9dff3e0500d73ce3488a809233": "6fd8105261395df4e1e0d9f16f7bf7a7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/8143aca84b608d88584c058b2741111a68ad57": "b1f0b5343b905b49e0a591d9044517af",
".git/objects/ee/1005c28f8b114690e0efd28b711206639fe0ae": "f90ef96e6003bf778b5d7f5cce761ce0",
".git/objects/ef/19a6374a26b46373dae256cca430bd98469526": "b158bf584349dba839ced0e82068cb6d",
".git/objects/ef/5238e10581885f41e64c2edb83251ffe8bdb29": "591f3cbc7f656cb5a0d42bf0e4a7107d",
".git/objects/f0/c50c2c3be6268c7bd0b130507764c9882706b5": "684f9a889643647d5c4f6a62701e6d60",
".git/objects/f1/40d36fc272d5cc6c9afe9bcc1adc8088a694f8": "f4833ca8b3e55fe0333e0ccca9848523",
".git/objects/f5/53a78d6157ac4ef7ce1ff3c218093f9bbccc6f": "c184dbe0d8aac867d28ed87ba4f45665",
".git/objects/f5/e039c8875fee77a000279a7fd648670bca7b76": "742807188aba4f94e0a07494c3ca9367",
".git/objects/f6/43021a5f0e2dc003f8ac5804186b763108eecf": "ebc13e510265147cca366ae447a57238",
".git/objects/f8/9b1a2f9d711b80f5bfc36aaf0c46358ad22a2d": "5a4e56774ba6091233dda47125f3e979",
".git/objects/fc/85872bad9da7e22b658335ea69f28daaee30ee": "c5b15c3b7a6fd64cc0fac47ca9c3e378",
".git/objects/fc/b51246649d7146baa78eacdb9aab02d5e91277": "0695bd3ccb7977f972b04256ece85cba",
".git/objects/fd/1200ee8f9672a0bc6173c3db44369e1cf193ce": "a4c90b2a5222efa7544e423b0f06487a",
".git/objects/ff/82946aaf6694c04b46d976320c33037dfb0c32": "51d4962111e46815fc9c15ab2a06907e",
".git/refs/heads/main": "a1f29bf9834a9740ceb1c3f23db2db54",
".git/refs/remotes/origin/main": "a1f29bf9834a9740ceb1c3f23db2db54",
"assets/AssetManifest.bin": "734f7bb067280ce0d11b38a6e047dd8a",
"assets/AssetManifest.json": "e52cfb7fe3df3241d4e5e63a3c487554",
"assets/assets/bestseller.svg": "692c2d518a4c54264b2ac260425bcb66",
"assets/assets/burger.jpg": "2fe8c42988eee64fe9a722f48002de2b",
"assets/assets/cart.svg": "2b0a3827fd9ab65f7dcdad912c4e19da",
"assets/assets/drinks.svg": "512499acfc1993eb1146c0c29e2f28e3",
"assets/assets/fastfood.svg": "86c9c39c029983ee123dab25e8aa3c0d",
"assets/assets/fastfoodwhite.png": "c101330c7514c124c7135f6c99e1f2b1",
"assets/assets/Icon.png": "2709266ed28c5daaac503aca08436c1e",
"assets/assets/Logo%2520Feast.jpg": "3ea14a012ed1451aca8a10973e27e06d",
"assets/assets/Logo%2520Feast.png": "73d3e088fffa940d01816e419a4dfe07",
"assets/assets/logo.svg": "410af4ae24af80749731c2906dd934aa",
"assets/assets/new.svg": "da9006cea9ff2ad75e910e33dee8f150",
"assets/assets/non-veg.svg": "d0f1e3e2e56bc42f01bccd0d5e51d892",
"assets/assets/recommend.svg": "99f4490239a194df12f76ad2cceaa4ec",
"assets/assets/restaurantIcon.png": "6318936342097020e25ab9ac6db6a5f3",
"assets/assets/Small%2520with%2520Black%2520BG.png": "e76afe768effcf0c1ab13e03cd32bc30",
"assets/assets/Smallwith%2520White%2520BG.png": "85cadb1052a077a5f1c00b034ecd647e",
"assets/assets/taj.png": "64a96f7a022c95d37481826507ebad33",
"assets/assets/timelapse.svg": "0813244ef77acd903dbeba80e76bec0e",
"assets/assets/veg.svg": "d4ad344ff0dc0fc75f075b642f51b9e8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d0889259749f02852c94c3899d158841",
"assets/NOTICES": "4f8ab4aca1433dc26da22ef03b0a05da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "973ad282346e65b0b7ef204e452fc623",
"/": "973ad282346e65b0b7ef204e452fc623",
"jsQR.js": "07e394874aef4a509f832a705757210c",
"main.dart.js": "a77443db0a1d66f2b022a715ccecf612",
"manifest.json": "397d9c97b6dac10f6ff062ca390e261a",
"version.json": "042e77d9310d646aa17cffc5cadf9eaa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
