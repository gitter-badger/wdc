--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = data, pg_catalog;

--
-- Data for Name: object; Type: TABLE DATA; Schema: data; Owner: postgres
--

COPY object (id) FROM stdin;
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
\.


--
-- Name: object_id_seq; Type: SEQUENCE SET; Schema: data; Owner: postgres
--

SELECT pg_catalog.setval('object_id_seq', 1, false);


--
-- Data for Name: objectgroup; Type: TABLE DATA; Schema: data; Owner: postgres
--

COPY objectgroup (id) FROM stdin;
\.


--
-- Name: objectgroup_id_seq; Type: SEQUENCE SET; Schema: data; Owner: postgres
--

SELECT pg_catalog.setval('objectgroup_id_seq', 1, false);


--
-- Data for Name: objectgroupassoc; Type: TABLE DATA; Schema: data; Owner: postgres
--

COPY objectgroupassoc (objectgroup_id, object_id, value, id) FROM stdin;
\.


--
-- Name: objectgroupassoc_id_seq; Type: SEQUENCE SET; Schema: data; Owner: postgres
--

SELECT pg_catalog.setval('objectgroupassoc_id_seq', 1, false);


SET search_path = metadata, pg_catalog;

--
-- Data for Name: artefact; Type: TABLE DATA; Schema: metadata; Owner: postgres
--

COPY artefact (artefact_id, artefact_schema, artefact_table, key) FROM stdin;
3	data	objectgroup	key1
2	data	object	key2
4	data	objectgroupassoc	key3
\.


--
-- Name: artefact_artefact_id_seq; Type: SEQUENCE SET; Schema: metadata; Owner: postgres
--

SELECT pg_catalog.setval('artefact_artefact_id_seq', 9, true);


--
-- Data for Name: metadatakey; Type: TABLE DATA; Schema: metadata; Owner: postgres
--

COPY metadatakey (metadatakey_id, key) FROM stdin;
1	wdc.metadata.name.en
2	wdc.metadata.name.ua
3	wdc.metadata.name.ru
4	wdc.metadata.description.en
5	wdc.metadata.description.ua
6	wdc.metadata.description.ru
7	wdc.object.name.en
8	wdc.object.name.ua
9	wdc.object.name.ru
10	wdc.object.iso2
11	wdc.object.iso3
12	wdc.object.comment.en
13	wdc.object.comment.ua
14	wdc.object.comment.ru
15	wdc.objectgroup.name.en
16	wdc.objectgroup.name.ua
17	wdc.objectgroup.name.ru
18	wdc.objectgroup.comment.en
19	wdc.objectgroup.comment.ua
20	wdc.objectgroup.comment.ru
21	wdc.artefact.name.en
22	wdc.artefact.name.ua
23	wdc.artefact.name.ru
24	new KEY
\.


--
-- Data for Name: artefact_def; Type: TABLE DATA; Schema: metadata; Owner: postgres
--

COPY artefact_def (artefact_id, metadatakey_id, required, uniq, default_value) FROM stdin;
2	8	t	t	\N
2	9	t	t	\N
2	10	t	t	\N
2	13	f	f	\N
2	14	f	f	\N
3	19	f	f	\N
2	11	t	t	\N
2	12	f	f	\N
3	15	t	t	\N
3	16	t	t	\N
3	17	t	t	\N
3	18	f	f	\N
3	20	f	f	\N
2	7	t	t	\N
\.


--
-- Data for Name: artefactmetadata; Type: TABLE DATA; Schema: metadata; Owner: postgres
--

COPY artefactmetadata (artefact_id, metadatakey_id, value) FROM stdin;
2	21	Objects
2	22	Об"єкти
2	23	Объекты
3	21	Object Groups
3	23	Группы объектов
4	21	Object Groups Association
4	22	Групування об"єктів
3	22	Групи об"єктів
4	23	Группировка объектов
\.


--
-- Data for Name: association; Type: TABLE DATA; Schema: metadata; Owner: postgres
--

COPY association (artefact_id, reference_id, localfield, foreignfield, key) FROM stdin;
4	3	objectgroup_id	data.objectgroup.id	key1
4	2	object_id	data.object.id	key2
\.


--
-- Data for Name: metadatakey_def; Type: TABLE DATA; Schema: metadata; Owner: postgres
--

COPY metadatakey_def (metadatakey_id, def_id, value) FROM stdin;
9	1	Object Name (ru)
10	1	Code ISO2
12	1	Object Comment (en)
13	1	Object Comment (ua)
14	1	Object Comment (ru)
7	2	Назва об"єкта (en)
10	2	Код ISO2
13	2	Коментар (ua)
14	2	Коментар (ru)
7	3	Название объєкта (en)
8	3	Название объєкта (ua)
11	3	Код ISO3
12	3	Комментарий (en)
7	5	Назва об"єкта  англійсською мовою
9	5	Назва об"єкта російською мовою
14	5	Коментар російською мовою містить загальну характеристику для об"єкта. Заповнюється експертами.
17	2	Назва групи об"єктів (ru)
19	2	Коментар (ua)
16	3	Название группы объєктов (ua)
20	3	Комментарий (ru)
15	5	Назва групи об"єктів англійською мовою
16	5	Назва групи об"єктів українською мовою
17	5	Назва групи об"єктів російською мовою
21	1	Artefact(en)
23	1	Artefact(ru)
22	3	Артефакт(ua)
7	1	Object Name (en)
8	1	Object Name (ua)
11	1	Code ISO3
8	2	Назва об"єкта (ua)
9	2	Назва об"єкта (ru)
11	2	Код ISO3
12	2	Коментар (en)
9	3	Название объєкта (ru)
10	3	Код ISO2
13	3	Комментарий (ua)
14	3	Комментарий (ru)
8	5	Назва об"єкта українською мовою
10	5	Код ISO2 об"єкта у відповідності до стандарту. Див. посилання www.google.com
11	5	Код ISO3 об"єкта у відповідності до стандарту. Див. посилання www.google.com
12	5	Коментар англійською мовою містить загальну характеристику для об"єкта. Заповнюється експертами.
13	5	Коментар українською мовою містить загальну характеристику для об"єкта. Заповнюється експертами.
15	1	Object Group Name (en)
16	1	Object Group Name (ua)
17	1	Object Group Name (ru)
18	1	Object Group Comment (en)
19	1	Object Group Comment (ua)
20	1	Object Group Comment (ru)
15	2	Назва групи об"єктів (en)
16	2	Назва групи об"єктів (ua)
18	2	Коментар (en)
20	2	Коментар (ru)
15	3	Название группы объєктов (en)
17	3	Название группы объєктов (ru)
18	3	Комментарий (en)
19	3	Комментарий (ua)
18	5	Коментар англійською мовою містить загальну характеристику для групи об"єктів. Заповнюється експертами.
19	5	Коментар українською мовою містить загальну характеристику для групи об"єктів. Заповнюється експертами.
20	5	Коментар російською мовою містить загальну характеристику для групи об"єктів. Заповнюється експертами.
22	1	Artefact(ua)
21	2	Артефакт(en)
22	2	Артефакт(ua)
23	2	Артефакт(ru)
21	3	Артефакт(en)
23	3	Артефакт(ru)
\.


--
-- Name: metadatakey_id_seq; Type: SEQUENCE SET; Schema: metadata; Owner: postgres
--

SELECT pg_catalog.setval('metadatakey_id_seq', 54, true);


--
-- Data for Name: objectgroupmetadata; Type: TABLE DATA; Schema: metadata; Owner: postgres
--

COPY objectgroupmetadata (metadatakey_id, subject_id, value) FROM stdin;
\.


--
-- Data for Name: objectmetadata; Type: TABLE DATA; Schema: metadata; Owner: postgres
--

COPY objectmetadata (metadatakey_id, subject_id, value) FROM stdin;
7	1	Autonomous Republic of Crimea
8	1	АР Крим
10	1	UA.KR
7	2	Cherkasy region
8	2	Черкаська
10	2	UA.CK
7	3	Chernihiv region
8	3	Чернігівська
10	3	UA.CH
7	4	Chernivtsi region
8	4	Чернівецька
10	4	UA.CV
7	5	Dnipropetrov'sk region
8	5	Дніпропетровська
10	5	UA.DP
7	6	Donets'k region
8	6	Донецька
10	6	UA.DT
7	7	Ivano-Frankivs'k region
8	7	Івано-Франківська
10	7	UA.IF
7	8	Kharkiv region
8	8	Харківська
10	8	UA.KK
7	9	Kherson region
8	9	Херсонська
10	9	UA.KS
7	10	Khmelnytsky region
8	10	Хмельницька
10	10	UA.KM
7	11	Kirovohrad region
8	11	Кіровоградська
10	11	UA.KH
7	12	Kyiv region
8	12	Київська
10	12	UA.KV
7	13	L'viv region
8	13	Львівська
10	13	UA.LV
7	14	Luhansk region
8	14	Луганська
10	14	UA.LH
7	15	Mykolayiv region
8	15	Миколаївська
10	15	UA.MY
7	16	Odesa region
8	16	Одеська
10	16	UA.OD
7	17	Poltava region
8	17	Полтавська
10	17	UA.PL
7	18	Rivne region
8	18	Рівненська
10	18	UA.RV
7	19	Sevastopol
8	19	Севастополь
10	19	UA.SC
7	20	Sumy region
8	20	Сумська
10	20	UA.SM
7	21	Ternopil' region
8	21	Тернопільська
10	21	UA.TP
7	22	Vinnytsya region
8	22	Вінницька
10	22	UA.VI
7	23	Volyn region
8	23	Волинська
10	23	UA.VO
7	24	Zakarpattya region
8	24	Закарпатська
10	24	UA.ZK
7	25	Zaporizhya region
8	25	Запорізька
10	25	UA.ZP
7	26	Zhytomyr region
8	26	Житомирська
10	26	UA.ZT
7	27	Kyiv
8	27	Київ
10	27	UA.KC
7	1	Autonomous Republic of Crimea
8	1	АР Крим
10	1	UA.KR
7	2	Cherkasy region
8	2	Черкаська
10	2	UA.CK
7	3	Chernihiv region
8	3	Чернігівська
10	3	UA.CH
7	4	Chernivtsi region
8	4	Чернівецька
10	4	UA.CV
7	5	Dnipropetrov'sk region
8	5	Дніпропетровська
10	5	UA.DP
7	6	Donets'k region
8	6	Донецька
10	6	UA.DT
7	7	Ivano-Frankivs'k region
8	7	Івано-Франківська
10	7	UA.IF
7	8	Kharkiv region
8	8	Харківська
10	8	UA.KK
7	9	Kherson region
8	9	Херсонська
10	9	UA.KS
7	10	Khmelnytsky region
8	10	Хмельницька
10	10	UA.KM
7	11	Kirovohrad region
8	11	Кіровоградська
10	11	UA.KH
7	12	Kyiv region
8	12	Київська
10	12	UA.KV
7	13	L'viv region
8	13	Львівська
10	13	UA.LV
7	14	Luhansk region
8	14	Луганська
10	14	UA.LH
7	15	Mykolayiv region
8	15	Миколаївська
10	15	UA.MY
7	16	Odesa region
8	16	Одеська
10	16	UA.OD
7	17	Poltava region
8	17	Полтавська
10	17	UA.PL
7	18	Rivne region
8	18	Рівненська
10	18	UA.RV
7	19	Sevastopol
8	19	Севастополь
10	19	UA.SC
7	20	Sumy region
8	20	Сумська
10	20	UA.SM
7	21	Ternopil' region
8	21	Тернопільська
10	21	UA.TP
7	22	Vinnytsya region
8	22	Вінницька
10	22	UA.VI
7	23	Volyn region
8	23	Волинська
10	23	UA.VO
7	24	Zakarpattya region
8	24	Закарпатська
10	24	UA.ZK
7	25	Zaporizhya region
8	25	Запорізька
10	25	UA.ZP
7	26	Zhytomyr region
8	26	Житомирська
10	26	UA.ZT
7	27	Kyiv
8	27	Київ
10	27	UA.KC
\.


--
-- PostgreSQL database dump complete
--

