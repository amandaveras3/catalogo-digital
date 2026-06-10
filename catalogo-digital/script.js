const DB_KEY = "catalogoDigitalDB";
const SESSION_KEY = "catalogoSession";
const LANG_KEY = "catalogoLang";
const THEME_KEY = "catalogoTheme";
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

let db = JSON.parse(localStorage.getItem(DB_KEY) || "null");
let session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
let currentLang = localStorage.getItem(LANG_KEY) || "pt-BR";
let selectedProductImage = "";

const i18n = {
  "pt-BR": {
    metaTitle: "Catálogo Digital | Sistema",
    brandTitle: "Catálogo Digital",
    brandSubtitle: "Gestão de produtos, vendas, clientes e relatórios.",
    brandShort: "Catálogo Gest",
    login: "Login",
    register: "Cadastro",
    email: "E-mail",
    password: "Senha",
    name: "Nome",
    enter: "Entrar",
    google: "Entrar com Google",
    testAccount: "Conta teste: admin@catalogo.com / 123456",
    createAccount: "Criar conta",
    yourName: "Seu nome",
    minPassword: "mínimo 6 caracteres",
    dashboard: "Dashboard",
    catalog: "Catálogo",
    products: "Produtos",
    clients: "Clientes",
    sales: "Vendas",
    tickets: "Atendimentos",
    reports: "Relatórios",
    logout: "Sair",
    welcome: "Bem-vindo(a), {name}.",
    search: "Buscar no sistema...",
    dark: "Modo escuro",
    metricProducts: "Produtos cadastrados",
    metricClients: "Clientes cadastrados",
    metricSold: "Produtos vendidos",
    metricRevenue: "Faturamento",
    finance: "Resumo financeiro",
    recent: "Últimas vendas",
    publicCatalog: "Catálogo público",
    catalogDesc: "Visualização dos produtos disponíveis para venda.",
    addProduct: "Cadastrar produto",
    productList: "Produtos",
    category: "Categoria",
    price: "Preço",
    stock: "Estoque",
    productImage: "Imagem do produto",
    imageHelp:
      "Selecione uma imagem do computador. Formatos aceitos: PNG, JPG, WEBP ou SVG. Sem limite artificial de tamanho.",
    removeImage: "Remover imagem",
    saveProduct: "Salvar produto",
    clear: "Limpar",
    addClient: "Cadastrar cliente",
    phone: "Telefone",
    saveClient: "Salvar cliente",
    registerSale: "Registrar venda",
    client: "Cliente",
    product: "Produto",
    quantity: "Quantidade",
    finishSale: "Finalizar venda",
    salesDone: "Vendas realizadas",
    newTicket: "Novo atendimento",
    channel: "Canal",
    status: "Status",
    note: "Observação",
    saveTicket: "Salvar atendimento",
    systemReports: "Relatórios do sistema",
    startDate: "Data inicial",
    endDate: "Data final",
    generateReport: "Gerar relatório",
    printReport: "Imprimir / Salvar PDF",
    actions: "Ações",
    edit: "Editar",
    del: "Excluir",
    date: "Data",
    total: "Total",
    qty: "Qtd",
    noProduct: "Nenhum produto encontrado.",
    noClient: "Nenhum cliente encontrado.",
    noSale: "Nenhuma venda registrada.",
    noTicket: "Nenhum atendimento encontrado.",
    wrongLogin: "E-mail ou senha incorretos.",
    emailExists: "E-mail já cadastrado.",
    accountCreated: "Conta criada com sucesso.",
    googleOk: "Login com Google simulado ativado.",
    productSaved: "Produto salvo com sucesso.",
    productDeleted: "Produto excluído.",
    clientSaved: "Cliente salvo com sucesso.",
    clientDeleted: "Cliente excluído.",
    saleSaved: "Venda registrada com sucesso.",
    ticketSaved: "Atendimento salvo com sucesso.",
    notEnoughStock: "Estoque insuficiente.",
    selectImage: "Selecione um arquivo de imagem válido.",
    imageError: "Não foi possível carregar a imagem.",
    saveError:
      "Não foi possível salvar. O navegador pode ter atingido o limite do armazenamento local.",
    removedClient: "Cliente removido",
    removedProduct: "Produto removido",
    noResults: "Nenhum resultado encontrado.",
    reportReady: "Relatório gerado com sucesso.",
    reportText:
      "No período analisado, a loja vendeu {sold} produtos, realizou {tickets} atendimentos, possui {clients} clientes cadastrados e gerou faturamento de {revenue}. Foram registradas {sales} vendas no período.",
    allPeriod: "Todo o período",
    period: "Período",
    lowStock: "Estoque baixo",
    available: "Disponível",
    outStock: "Esgotado",
    selectClient: "Selecione um cliente",
    selectProduct: "Selecione um produto",
  },
  en: {
    metaTitle: "Digital Catalog | System",
    brandTitle: "Digital Catalog",
    brandSubtitle: "Product, sales, customer and report management.",
    brandShort: "Catalog Gest",
    login: "Login",
    register: "Sign up",
    email: "Email",
    password: "Password",
    name: "Name",
    enter: "Sign in",
    google: "Sign in with Google",
    testAccount: "Test account: admin@catalogo.com / 123456",
    createAccount: "Create account",
    yourName: "Your name",
    minPassword: "minimum 6 characters",
    dashboard: "Dashboard",
    catalog: "Catalog",
    products: "Products",
    clients: "Customers",
    sales: "Sales",
    tickets: "Support",
    reports: "Reports",
    logout: "Log out",
    welcome: "Welcome, {name}.",
    search: "Search the system...",
    dark: "Dark mode",
    metricProducts: "Registered products",
    metricClients: "Registered customers",
    metricSold: "Products sold",
    metricRevenue: "Revenue",
    finance: "Financial summary",
    recent: "Latest sales",
    publicCatalog: "Public catalog",
    catalogDesc: "View of products available for sale.",
    addProduct: "Add product",
    productList: "Products",
    category: "Category",
    price: "Price",
    stock: "Stock",
    productImage: "Product image",
    imageHelp:
      "Select an image from your computer. Accepted formats: PNG, JPG, WEBP or SVG. No artificial size limit.",
    removeImage: "Remove image",
    saveProduct: "Save product",
    clear: "Clear",
    addClient: "Add customer",
    phone: "Phone",
    saveClient: "Save customer",
    registerSale: "Register sale",
    client: "Customer",
    product: "Product",
    quantity: "Quantity",
    finishSale: "Complete sale",
    salesDone: "Completed sales",
    newTicket: "New support request",
    channel: "Channel",
    status: "Status",
    note: "Note",
    saveTicket: "Save support request",
    systemReports: "System reports",
    startDate: "Start date",
    endDate: "End date",
    generateReport: "Generate report",
    printReport: "Print / Save PDF",
    actions: "Actions",
    edit: "Edit",
    del: "Delete",
    date: "Date",
    total: "Total",
    qty: "Qty",
    noProduct: "No products found.",
    noClient: "No customers found.",
    noSale: "No sales registered.",
    noTicket: "No support requests found.",
    wrongLogin: "Incorrect email or password.",
    emailExists: "Email already registered.",
    accountCreated: "Account created successfully.",
    googleOk: "Simulated Google login enabled.",
    productSaved: "Product saved successfully.",
    productDeleted: "Product deleted.",
    clientSaved: "Customer saved successfully.",
    clientDeleted: "Customer deleted.",
    saleSaved: "Sale registered successfully.",
    ticketSaved: "Support request saved successfully.",
    notEnoughStock: "Insufficient stock.",
    selectImage: "Select a valid image file.",
    imageError: "Could not load the image.",
    saveError:
      "Could not save. The browser may have reached the local storage limit.",
    removedClient: "Removed customer",
    removedProduct: "Removed product",
    noResults: "No results found.",
    reportReady: "Report generated successfully.",
    reportText:
      "In the analyzed period, the store sold {sold} products, completed {tickets} support requests, has {clients} registered customers and generated {revenue} in revenue. {sales} sales were registered in the period.",
    allPeriod: "All period",
    period: "Period",
    lowStock: "Low stock",
    available: "Available",
    outStock: "Out of stock",
    selectClient: "Select a customer",
    selectProduct: "Select a product",
  },
  es: {
    metaTitle: "Catálogo Digital | Sistema",
    brandTitle: "Catálogo Digital",
    brandSubtitle: "Gestión de productos, ventas, clientes e informes.",
    brandShort: "Catálogo Gest",
    login: "Iniciar sesión",
    register: "Registro",
    email: "Correo electrónico",
    password: "Contraseña",
    name: "Nombre",
    enter: "Entrar",
    google: "Entrar con Google",
    testAccount: "Cuenta de prueba: admin@catalogo.com / 123456",
    createAccount: "Crear cuenta",
    yourName: "Tu nombre",
    minPassword: "mínimo 6 caracteres",
    dashboard: "Panel",
    catalog: "Catálogo",
    products: "Productos",
    clients: "Clientes",
    sales: "Ventas",
    tickets: "Atenciones",
    reports: "Informes",
    logout: "Salir",
    welcome: "Bienvenido(a), {name}.",
    search: "Buscar en el sistema...",
    dark: "Modo oscuro",
    metricProducts: "Productos registrados",
    metricClients: "Clientes registrados",
    metricSold: "Productos vendidos",
    metricRevenue: "Ingresos",
    finance: "Resumen financiero",
    recent: "Últimas ventas",
    publicCatalog: "Catálogo público",
    catalogDesc: "Visualización de productos disponibles para la venta.",
    addProduct: "Registrar producto",
    productList: "Productos",
    category: "Categoría",
    price: "Precio",
    stock: "Stock",
    productImage: "Imagen del producto",
    imageHelp:
      "Selecciona una imagen de tu computadora. Formatos aceptados: PNG, JPG, WEBP o SVG. Sin límite artificial de tamaño.",
    removeImage: "Eliminar imagen",
    saveProduct: "Guardar producto",
    clear: "Limpiar",
    addClient: "Registrar cliente",
    phone: "Teléfono",
    saveClient: "Guardar cliente",
    registerSale: "Registrar venta",
    client: "Cliente",
    product: "Producto",
    quantity: "Cantidad",
    finishSale: "Finalizar venta",
    salesDone: "Ventas realizadas",
    newTicket: "Nueva atención",
    channel: "Canal",
    status: "Estado",
    note: "Observación",
    saveTicket: "Guardar atención",
    systemReports: "Informes del sistema",
    startDate: "Fecha inicial",
    endDate: "Fecha final",
    generateReport: "Generar informe",
    printReport: "Imprimir / Guardar PDF",
    actions: "Acciones",
    edit: "Editar",
    del: "Eliminar",
    date: "Fecha",
    total: "Total",
    qty: "Cant.",
    noProduct: "Ningún producto encontrado.",
    noClient: "Ningún cliente encontrado.",
    noSale: "Ninguna venta registrada.",
    noTicket: "Ninguna atención encontrada.",
    wrongLogin: "Correo o contraseña incorrectos.",
    emailExists: "Correo ya registrado.",
    accountCreated: "Cuenta creada con éxito.",
    googleOk: "Login con Google simulado activado.",
    productSaved: "Producto guardado con éxito.",
    productDeleted: "Producto eliminado.",
    clientSaved: "Cliente guardado con éxito.",
    clientDeleted: "Cliente eliminado.",
    saleSaved: "Venta registrada con éxito.",
    ticketSaved: "Atención guardada con éxito.",
    notEnoughStock: "Stock insuficiente.",
    selectImage: "Selecciona un archivo de imagen válido.",
    imageError: "No se pudo cargar la imagen.",
    saveError:
      "No se pudo guardar. El navegador puede haber alcanzado el límite de almacenamiento local.",
    removedClient: "Cliente eliminado",
    removedProduct: "Producto eliminado",
    noResults: "Ningún resultado encontrado.",
    reportReady: "Informe generado con éxito.",
    reportText:
      "En el período analizado, la tienda vendió {sold} productos, realizó {tickets} atenciones, tiene {clients} clientes registrados y generó ingresos de {revenue}. Se registraron {sales} ventas en el período.",
    allPeriod: "Todo el período",
    period: "Período",
    lowStock: "Stock bajo",
    available: "Disponible",
    outStock: "Agotado",
    selectClient: "Selecciona un cliente",
    selectProduct: "Selecciona un producto",
  },
  it: {
    metaTitle: "Catalogo Digitale | Sistema",
    brandTitle: "Catalogo Digitale",
    brandSubtitle: "Gestione di prodotti, vendite, clienti e report.",
    brandShort: "Catalogo Gest",
    login: "Accesso",
    register: "Registrazione",
    email: "E-mail",
    password: "Password",
    name: "Nome",
    enter: "Entra",
    google: "Accedi con Google",
    testAccount: "Account di prova: admin@catalogo.com / 123456",
    createAccount: "Crea account",
    yourName: "Il tuo nome",
    minPassword: "minimo 6 caratteri",
    dashboard: "Dashboard",
    catalog: "Catalogo",
    products: "Prodotti",
    clients: "Clienti",
    sales: "Vendite",
    tickets: "Assistenze",
    reports: "Report",
    logout: "Esci",
    welcome: "Benvenuto(a), {name}.",
    search: "Cerca nel sistema...",
    dark: "Modalità scura",
    metricProducts: "Prodotti registrati",
    metricClients: "Clienti registrati",
    metricSold: "Prodotti venduti",
    metricRevenue: "Fatturato",
    finance: "Riepilogo finanziario",
    recent: "Ultime vendite",
    publicCatalog: "Catalogo pubblico",
    catalogDesc: "Visualizzazione dei prodotti disponibili per la vendita.",
    addProduct: "Aggiungi prodotto",
    productList: "Prodotti",
    category: "Categoria",
    price: "Prezzo",
    stock: "Scorte",
    productImage: "Immagine del prodotto",
    imageHelp:
      "Seleziona un’immagine dal computer. Formati accettati: PNG, JPG, WEBP o SVG. Nessun limite artificiale di dimensione.",
    removeImage: "Rimuovi immagine",
    saveProduct: "Salva prodotto",
    clear: "Pulisci",
    addClient: "Aggiungi cliente",
    phone: "Telefono",
    saveClient: "Salva cliente",
    registerSale: "Registra vendita",
    client: "Cliente",
    product: "Prodotto",
    quantity: "Quantità",
    finishSale: "Concludi vendita",
    salesDone: "Vendite effettuate",
    newTicket: "Nuova assistenza",
    channel: "Canale",
    status: "Stato",
    note: "Osservazione",
    saveTicket: "Salva assistenza",
    systemReports: "Report del sistema",
    startDate: "Data iniziale",
    endDate: "Data finale",
    generateReport: "Genera report",
    printReport: "Stampa / Salva PDF",
    actions: "Azioni",
    edit: "Modifica",
    del: "Elimina",
    date: "Data",
    total: "Totale",
    qty: "Qtà",
    noProduct: "Nessun prodotto trovato.",
    noClient: "Nessun cliente trovato.",
    noSale: "Nessuna vendita registrata.",
    noTicket: "Nessuna assistenza trovata.",
    wrongLogin: "E-mail o password errati.",
    emailExists: "E-mail già registrata.",
    accountCreated: "Account creato con successo.",
    googleOk: "Accesso Google simulato attivato.",
    productSaved: "Prodotto salvato con successo.",
    productDeleted: "Prodotto eliminato.",
    clientSaved: "Cliente salvato con successo.",
    clientDeleted: "Cliente eliminato.",
    saleSaved: "Vendita registrata con successo.",
    ticketSaved: "Assistenza salvata con successo.",
    notEnoughStock: "Scorte insufficienti.",
    selectImage: "Seleziona un file immagine valido.",
    imageError: "Impossibile caricare l’immagine.",
    saveError:
      "Impossibile salvare. Il browser potrebbe aver raggiunto il limite di archiviazione locale.",
    removedClient: "Cliente rimosso",
    removedProduct: "Prodotto rimosso",
    noResults: "Nessun risultato trovato.",
    reportReady: "Report generato con successo.",
    reportText:
      "Nel periodo analizzato, il negozio ha venduto {sold} prodotti, ha effettuato {tickets} assistenze, possiede {clients} clienti registrati e ha generato un fatturato di {revenue}. Sono state registrate {sales} vendite nel periodo.",
    allPeriod: "Tutto il periodo",
    period: "Periodo",
    lowStock: "Scorte basse",
    available: "Disponibile",
    outStock: "Esaurito",
    selectClient: "Seleziona un cliente",
    selectProduct: "Seleziona un prodotto",
  },
};

function t(key, vars = {}) {
  let txt =
    (i18n[currentLang] && i18n[currentLang][key]) || i18n["pt-BR"][key] || key;
  Object.entries(vars).forEach(([k, v]) => (txt = txt.replaceAll(`{${k}}`, v)));
  return txt;
}

function saveDB() {
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
    return true;
  } catch (error) {
    console.error(error);
    toast(t("saveError"));
    return false;
  }
}
function saveSession() {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}
function money(v) {
  return Number(v || 0).toLocaleString(
    currentLang === "pt-BR" ? "pt-BR" : currentLang,
    { style: "currency", currency: "BRL" },
  );
}
function dateLocal(d) {
  return new Date(d).toLocaleDateString(
    currentLang === "pt-BR" ? "pt-BR" : currentLang,
  );
}
function normalize(v) {
  return String(v || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}
function getProduct(id) {
  return db.products.find((p) => p.id === id);
}
function getClient(id) {
  return db.clients.find((c) => c.id === id);
}
function fallbackImage() {
  return "assets/images/presente.svg";
}
function imgSrc(p) {
  return p?.image || fallbackImage();
}

function seed() {
  if (db) return;
  const p1 = {
    id: crypto.randomUUID(),
    name: "Vestido Floral",
    category: "Moda",
    price: 89.9,
    stock: 18,
    image: "assets/images/vestido.svg",
  };
  const p2 = {
    id: crypto.randomUUID(),
    name: "Kit Presente",
    category: "Presentes",
    price: 59.9,
    stock: 25,
    image: "assets/images/presente.svg",
  };
  const p3 = {
    id: crypto.randomUUID(),
    name: "Bolsa Casual",
    category: "Acessórios",
    price: 79.9,
    stock: 10,
    image: "assets/images/bolsa.svg",
  };
  const p4 = {
    id: crypto.randomUUID(),
    name: "Camiseta Básica",
    category: "Moda",
    price: 39.9,
    stock: 30,
    image: "assets/images/camiseta.svg",
  };
  const c1 = {
    id: crypto.randomUUID(),
    name: "Maria Silva",
    phone: "(88) 9 9999-0001",
    email: "maria@email.com",
  };
  const c2 = {
    id: crypto.randomUUID(),
    name: "João Lima",
    phone: "(88) 9 9999-0002",
    email: "joao@email.com",
  };
  db = {
    users: [
      {
        id: 1,
        name: "Administrador",
        email: "admin@catalogo.com",
        password: "123456",
        provider: "local",
      },
    ],
    products: [p1, p2, p3, p4],
    clients: [c1, c2],
    sales: [],
    tickets: [],
  };
  db.sales.push({
    id: crypto.randomUUID(),
    clientId: c1.id,
    productId: p1.id,
    quantity: 2,
    total: p1.price * 2,
    date: new Date().toISOString(),
  });
  db.tickets.push({
    id: crypto.randomUUID(),
    clientId: c1.id,
    channel: "WhatsApp",
    status: "Concluído",
    note: "Cliente pediu informações sobre entrega.",
    date: new Date().toISOString(),
  });
  saveDB();
}

function toast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2600);
}

function readImageFile(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve("");
    if (!file.type.startsWith("image/"))
      return reject(new Error(t("selectImage")));
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error(t("imageError")));
    reader.readAsDataURL(file);
  });
}
function setImagePreview(src) {
  selectedProductImage = src || "";
  const box = $("#imagePreview");
  const img = $("#productImagePreview");
  if (!box || !img) return;
  if (src) {
    img.src = src;
    box.classList.remove("hidden");
  } else {
    img.removeAttribute("src");
    box.classList.add("hidden");
  }
}
function resetProductForm() {
  $("#productForm")?.reset();
  if ($("#productId")) $("#productId").value = "";
  if ($("#productImage")) $("#productImage").value = "";
  setImagePreview("");
}

function setText(sel, txt) {
  const el = $(sel);
  if (el) el.textContent = txt;
}
function labelForInput(inputId, labelText) {
  const input = $("#" + inputId);
  const label = input?.closest("label");
  if (!label) return;
  [...label.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim())
      node.textContent = labelText;
  });
}
function translateSelectOptions() {
  const channels = $("#ticketChannel");
  if (channels)
    channels.innerHTML = `<option>WhatsApp</option><option>Instagram</option><option>${currentLang === "en" ? "Phone" : currentLang === "es" ? "Teléfono" : currentLang === "it" ? "Telefono" : "Telefone"}</option><option>${currentLang === "en" ? "In person" : currentLang === "es" ? "Presencial" : currentLang === "it" ? "Di persona" : "Presencial"}</option>`;
  const status = $("#ticketStatus");
  if (status)
    status.innerHTML = `<option>${currentLang === "en" ? "Open" : currentLang === "es" ? "Abierto" : currentLang === "it" ? "Aperto" : "Aberto"}</option><option>${currentLang === "en" ? "In progress" : currentLang === "es" ? "En progreso" : currentLang === "it" ? "In corso" : "Em andamento"}</option><option>${currentLang === "en" ? "Completed" : currentLang === "es" ? "Concluido" : currentLang === "it" ? "Concluso" : "Concluído"}</option>`;
}
function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.title = t("metaTitle");
  $$("select.language-select").forEach((s) => (s.value = currentLang));
  $('[data-i18n="brand.title"]') &&
    ($('[data-i18n="brand.title"]').textContent = t("brandTitle"));
  $('[data-i18n="brand.subtitle"]') &&
    ($('[data-i18n="brand.subtitle"]').textContent = t("brandSubtitle"));
  $('[data-i18n="brand.short"]') &&
    ($('[data-i18n="brand.short"]').textContent = t("brandShort"));
  $('[data-tab="login"]') && ($('[data-tab="login"]').textContent = t("login"));
  $('[data-tab="register"]') &&
    ($('[data-tab="register"]').textContent = t("register"));
  setText('[data-i18n="auth.enter"]', t("enter"));
  setText('[data-i18n="auth.google"]', t("google"));
  setText('[data-i18n="auth.testAccount"]', t("testAccount"));
  setText('[data-i18n="auth.createAccount"]', t("createAccount"));
  labelForInput("loginEmail", t("email"));
  labelForInput("loginPassword", t("password"));
  labelForInput("registerName", t("name"));
  labelForInput("registerEmail", t("email"));
  labelForInput("registerPassword", t("password"));
  $("#registerName")?.setAttribute("placeholder", t("yourName"));
  $("#registerPassword")?.setAttribute("placeholder", t("minPassword"));
  $("#globalSearch")?.setAttribute("placeholder", t("search"));
  const navMap = {
    dashboard: "dashboard",
    catalogo: "catalog",
    produtos: "products",
    clientes: "clients",
    vendas: "sales",
    atendimentos: "tickets",
    relatorios: "reports",
  };
  $$(".nav-link").forEach((btn) => {
    const span = btn.querySelector("span");
    if (span)
      span.textContent = t(navMap[btn.dataset.section] || btn.dataset.section);
  });
  $("#logoutBtn span") && ($("#logoutBtn span").textContent = t("logout"));
  $("#themeToggle span") && ($("#themeToggle span").textContent = t("dark"));
  updateTitle();
  setText(
    "#welcomeText",
    t("welcome", { name: session?.name || "usuário(a)" }),
  );
  const metricKeys = [
    "metricProducts",
    "metricClients",
    "metricSold",
    "metricRevenue",
  ];
  $$(".metric span").forEach((el, i) => (el.textContent = t(metricKeys[i])));
  const h3Map = [
    ["#dashboard .panel:nth-child(1) h3", "finance"],
    ["#dashboard .panel:nth-child(2) h3", "recent"],
    ["#catalogo .section-head h3", "publicCatalog"],
    ["#catalogo .section-head p", "catalogDesc"],
    ["#productForm h3", "addProduct"],
    ["#produtos .panel:not(.form-panel) h3", "productList"],
    ["#clientForm h3", "addClient"],
    ["#clientes .panel:not(.form-panel) h3", "clients"],
    ["#saleForm h3", "registerSale"],
    ["#vendas .panel:not(.form-panel) h3", "salesDone"],
    ["#ticketForm h3", "newTicket"],
    ["#atendimentos .panel:not(.form-panel) h3", "tickets"],
    ["#relatorios h3", "systemReports"],
  ];
  h3Map.forEach(([sel, key]) => setText(sel, t(key)));
  labelForInput("productName", t("name"));
  labelForInput("productCategory", t("category"));
  labelForInput("productPrice", t("price"));
  labelForInput("productStock", t("stock"));
  labelForInput("productImage", t("productImage"));
  const help = $("#productImage")?.closest("label")?.querySelector("small");
  if (help) help.textContent = t("imageHelp");
  setText("#removeProductImage", t("removeImage"));
  setText("#productForm .btn.primary", t("saveProduct"));
  setText("#clearProduct", t("clear"));
  labelForInput("clientName", t("name"));
  labelForInput("clientPhone", t("phone"));
  labelForInput("clientEmail", t("email"));
  setText("#clientForm .btn.primary", t("saveClient"));
  setText("#clearClient", t("clear"));
  labelForInput("saleQuantity", t("quantity"));
  labelForInput(
    "saleDate",
    currentLang === "en"
      ? "Sale date"
      : currentLang === "es"
        ? "Fecha de venta"
        : currentLang === "it"
          ? "Data della vendita"
          : "Data da venda",
  );
  $("#saleClient")?.closest("label") &&
    ($("#saleClient").closest("label").firstChild.textContent = t("client"));
  $("#saleProduct")?.closest("label") &&
    ($("#saleProduct").closest("label").firstChild.textContent = t("product"));
  setText("#saleForm .btn.primary", t("finishSale"));
  setText("#clearSale", t("clear"));
  $("#ticketClient")?.closest("label") &&
    ($("#ticketClient").closest("label").firstChild.textContent = t("client"));
  $("#ticketChannel")?.closest("label") &&
    ($("#ticketChannel").closest("label").firstChild.textContent =
      t("channel"));
  $("#ticketStatus")?.closest("label") &&
    ($("#ticketStatus").closest("label").firstChild.textContent = t("status"));
  labelForInput("ticketNote", t("note"));
  setText("#ticketForm .btn.primary", t("saveTicket"));
  setText("#clearTicket", t("clear"));
  labelForInput("dateStart", t("startDate"));
  labelForInput("dateEnd", t("endDate"));
  setText("#generateReport", t("generateReport"));
  setText("#printReport", t("printReport"));
  $("#clientPhone")?.setAttribute("placeholder", "(XX) X XXXX-XXXX");
  setText("#salesChartTitle", t("finance"));
  setText(
    "#productsChartTitle",
    currentLang === "en"
      ? "Best-selling products"
      : currentLang === "es"
        ? "Productos más vendidos"
        : currentLang === "it"
          ? "Prodotti più venduti"
          : "Produtos mais vendidos",
  );
  setText(
    "#reportSalesChartTitle",
    currentLang === "en"
      ? "Sales by day"
      : currentLang === "es"
        ? "Ventas por día"
        : currentLang === "it"
          ? "Vendite per giorno"
          : "Vendas por dia",
  );
  setText(
    "#reportProductsChartTitle",
    currentLang === "en"
      ? "Best-selling products"
      : currentLang === "es"
        ? "Productos más vendidos"
        : currentLang === "it"
          ? "Prodotti più venduti"
          : "Produtos mais vendidos",
  );
  translateSelectOptions();
}
function updateTitle() {
  const active = $(".nav-link.active");
  const keyMap = {
    dashboard: "dashboard",
    catalogo: "catalog",
    produtos: "products",
    clientes: "clients",
    vendas: "sales",
    atendimentos: "tickets",
    relatorios: "reports",
  };
  if (active && $("#pageTitle"))
    $("#pageTitle").textContent = t(
      keyMap[active.dataset.section] || "dashboard",
    );
}

function showApp() {
  $("#authView")?.classList.add("hidden");
  $("#appView")?.classList.remove("hidden");
  applyTranslations();
  renderAll();
}
function showAuth() {
  $("#authView")?.classList.remove("hidden");
  $("#appView")?.classList.add("hidden");
  applyTranslations();
}

function productText(p) {
  return normalize(`${p.name} ${p.category} ${money(p.price)} ${p.stock}`);
}
function clientText(c) {
  return normalize(`${c.name} ${c.phone} ${c.email || ""}`);
}
function saleText(s) {
  return normalize(
    `${dateLocal(s.date)} ${getClient(s.clientId)?.name || ""} ${getProduct(s.productId)?.name || ""} ${s.quantity} ${money(s.total)}`,
  );
}
function ticketText(tk) {
  return normalize(
    `${dateLocal(tk.date)} ${getClient(tk.clientId)?.name || ""} ${tk.channel} ${tk.status} ${tk.note || ""}`,
  );
}
function currentSearch() {
  return normalize($("#globalSearch")?.value || "");
}

function renderAll(q = currentSearch()) {
  q = normalize(q);
  renderMetrics();
  renderCatalog(q);
  renderProducts(q);
  renderClients(q);
  renderSales(q);
  renderTickets(q);
  fillSelects();
  ensureSaleDate();
  renderRecent();
  renderReport(false);
  drawChart();
  renderSearchResults(q);
}
function renderMetrics() {
  const sold = db.sales.reduce((sum, s) => sum + Number(s.quantity || 0), 0);
  const revenue = db.sales.reduce((sum, s) => sum + Number(s.total || 0), 0);
  setText("#mProdutos", db.products.length);
  setText("#mClientes", db.clients.length);
  setText("#mVendidos", sold);
  setText("#mFaturamento", money(revenue));
}
function productMedia(p) {
  return `<img src="${imgSrc(p)}" alt="${p.name}" loading="lazy" onerror="this.src='${fallbackImage()}'">`;
}
function productThumb(p) {
  return `<img class="product-thumb" src="${imgSrc(p)}" alt="" onerror="this.src='${fallbackImage()}'">`;
}
function renderCatalog(q = "") {
  const products = db.products.filter((p) => !q || productText(p).includes(q));
  $("#catalogCards").innerHTML =
    products
      .map(
        (p) =>
          `<article class="product-card"><div class="product-img">${productMedia(p)}</div><h4>${p.name}</h4><p>${p.category}</p><p>${t("stock")}: ${p.stock}</p><div class="price">${money(p.price)}</div></article>`,
      )
      .join("") || `<p>${t("noProduct")}</p>`;
}
function renderProducts(q = "") {
  const rows = db.products
    .filter((p) => !q || productText(p).includes(q))
    .map(
      (p) =>
        `<tr><td>${productThumb(p)}${p.name}</td><td>${p.category}</td><td>${money(p.price)}</td><td>${p.stock}</td><td><button class="btn ghost action" onclick="editProduct('${p.id}')">${t("edit")}</button><button class="btn danger action" onclick="delProduct('${p.id}')">${t("del")}</button></td></tr>`,
    )
    .join("");
  $("#productList").innerHTML =
    `<table><thead><tr><th>${t("product")}</th><th>${t("category")}</th><th>${t("price")}</th><th>${t("stock")}</th><th>${t("actions")}</th></tr></thead><tbody>${rows || `<tr><td colspan="5">${t("noProduct")}</td></tr>`}</tbody></table>`;
}
function renderClients(q = "") {
  const rows = db.clients
    .filter((c) => !q || clientText(c).includes(q))
    .map(
      (c) =>
        `<tr><td>${c.name}</td><td>${c.phone}</td><td>${c.email || "-"}</td><td><button class="btn ghost action" onclick="editClient('${c.id}')">${t("edit")}</button><button class="btn danger action" onclick="delClient('${c.id}')">${t("del")}</button></td></tr>`,
    )
    .join("");
  $("#clientList").innerHTML =
    `<table><thead><tr><th>${t("name")}</th><th>${t("phone")}</th><th>${t("email")}</th><th>${t("actions")}</th></tr></thead><tbody>${rows || `<tr><td colspan="4">${t("noClient")}</td></tr>`}</tbody></table>`;
}
function renderSales(q = "") {
  const rows = db.sales
    .filter((s) => !q || saleText(s).includes(q))
    .map(
      (s) =>
        `<tr><td>${dateLocal(s.date)}</td><td>${getClient(s.clientId)?.name || t("removedClient")}</td><td>${getProduct(s.productId)?.name || t("removedProduct")}</td><td>${s.quantity}</td><td>${money(s.total)}</td><td><button class="btn danger action" onclick="delSale('${s.id}')">${t("del")}</button></td></tr>`,
    )
    .join("");
  $("#saleList").innerHTML =
    `<table><thead><tr><th>${t("date")}</th><th>${t("client")}</th><th>${t("product")}</th><th>${t("qty")}</th><th>${t("total")}</th><th>${t("actions")}</th></tr></thead><tbody>${rows || `<tr><td colspan="6">${t("noSale")}</td></tr>`}</tbody></table>`;
}
function renderTickets(q = "") {
  const rows = db.tickets
    .filter((tk) => !q || ticketText(tk).includes(q))
    .map(
      (tk) =>
        `<tr><td>${dateLocal(tk.date)}</td><td>${getClient(tk.clientId)?.name || t("removedClient")}</td><td>${tk.channel}</td><td>${tk.status}</td><td>${tk.note || "-"}</td><td><button class="btn danger action" onclick="delTicket('${tk.id}')">${t("del")}</button></td></tr>`,
    )
    .join("");
  $("#ticketList").innerHTML =
    `<table><thead><tr><th>${t("date")}</th><th>${t("client")}</th><th>${t("channel")}</th><th>${t("status")}</th><th>${t("note")}</th><th>${t("actions")}</th></tr></thead><tbody>${rows || `<tr><td colspan="6">${t("noTicket")}</td></tr>`}</tbody></table>`;
}
function renderRecent() {
  $("#recentSales").innerHTML =
    db.sales
      .slice(-5)
      .reverse()
      .map(
        (s) =>
          `<div class="list-item"><strong>${getProduct(s.productId)?.name || t("removedProduct")}</strong><br>${s.quantity} un. - ${getClient(s.clientId)?.name || t("removedClient")} - ${money(s.total)}</div>`,
      )
      .join("") || `<p>${t("noSale")}</p>`;
}
function fillSelects() {
  if ($("#saleClient"))
    $("#saleClient").innerHTML =
      `<option value="">${t("selectClient")}</option>` +
      db.clients
        .map((c) => `<option value="${c.id}">${c.name}</option>`)
        .join("");
  if ($("#ticketClient"))
    $("#ticketClient").innerHTML =
      `<option value="">${t("selectClient")}</option>` +
      db.clients
        .map((c) => `<option value="${c.id}">${c.name}</option>`)
        .join("");
  if ($("#saleProduct"))
    $("#saleProduct").innerHTML =
      `<option value="">${t("selectProduct")}</option>` +
      db.products
        .filter((p) => Number(p.stock) > 0)
        .map(
          (p) =>
            `<option value="${p.id}">${p.name} - ${money(p.price)} (${p.stock})</option>`,
        )
        .join("");
}
function renderReport(showToast = false) {
  const out = $("#reportOutput");
  if (!out) return;
  const start = $("#dateStart")?.value
    ? new Date($("#dateStart").value + "T00:00:00")
    : null;
  const end = $("#dateEnd")?.value
    ? new Date($("#dateEnd").value + "T23:59:59")
    : null;
  const filtered = db.sales.filter((s) => {
    const d = new Date(s.date);
    return (!start || d >= start) && (!end || d <= end);
  });
  const sold = filtered.reduce((sum, s) => sum + Number(s.quantity || 0), 0);
  const revenue = filtered.reduce((sum, s) => sum + Number(s.total || 0), 0);
  const ticketCount = db.tickets.filter((tk) => {
    const d = new Date(tk.date);
    return (!start || d >= start) && (!end || d <= end);
  }).length;
  const period =
    start || end
      ? `${$("#dateStart")?.value || "..."} - ${$("#dateEnd")?.value || "..."}`
      : t("allPeriod");
  const header = $("#printReportHeader");
  if (header)
    header.querySelector("span").textContent =
      currentLang === "en"
        ? "System management report"
        : currentLang === "es"
          ? "Informe gerencial del sistema"
          : currentLang === "it"
            ? "Report gestionale del sistema"
            : "Relatório gerencial do sistema";
  out.innerHTML = `<div class="report-kpis"><span><b>${sold}</b><small>${t("metricSold")}</small></span><span><b>${filtered.length}</b><small>${t("sales")}</small></span><span><b>${db.clients.length}</b><small>${t("clients")}</small></span><span><b>${money(revenue)}</b><small>${t("metricRevenue")}</small></span></div><strong>${t("period")}: ${period}</strong><p>${t("reportText", { sold, tickets: ticketCount, clients: db.clients.length, revenue: money(revenue), sales: filtered.length })}</p>`;
  drawReportCharts(filtered);
  if (showToast) toast(t("reportReady"));
}
function todayInputValue() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}
function ensureSaleDate() {
  const input = $("#saleDate");
  if (input && !input.value) input.value = todayInputValue();
}
function saleDateLabel(date) {
  const d = new Date(date);
  return Number.isNaN(d.getTime())
    ? "-"
    : d.toLocaleDateString(currentLang === "pt-BR" ? "pt-BR" : currentLang, {
        day: "2-digit",
        month: "2-digit",
      });
}
function aggregateSalesByDay(sales = db.sales) {
  const map = new Map();
  sales.forEach((s) => {
    const d = new Date(s.date);
    if (Number.isNaN(d.getTime())) return;
    const key = d.toISOString().slice(0, 10);
    if (!map.has(key))
      map.set(key, { label: saleDateLabel(s.date), total: 0, quantity: 0 });
    map.get(key).total += Number(s.total || 0);
    map.get(key).quantity += Number(s.quantity || 0);
  });
  return [...map.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([, v]) => v)
    .slice(-8);
}
function aggregateProductsSold(sales = db.sales) {
  const map = new Map();
  sales.forEach((s) => {
    const product = getProduct(s.productId);
    const name = product?.name || t("removedProduct");
    map.set(name, (map.get(name) || 0) + Number(s.quantity || 0));
  });
  return [...map.entries()]
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8);
}
function drawBarCanvas(canvasId, data, opts = {}) {
  const canvas = $("#" + canvasId);
  if (!canvas || !canvas.getContext) return;
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const width = Math.max(
    320,
    Math.floor(rect.width || canvas.parentElement?.clientWidth || 500),
  );
  const height = Number(canvas.getAttribute("height") || 220);
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.font = "12px Arial";
  ctx.fillStyle =
    getComputedStyle(document.body).getPropertyValue("--muted") || "#64748b";
  if (!data.length) {
    ctx.textAlign = "center";
    ctx.fillText(opts.empty || "Sem dados para exibir", width / 2, height / 2);
    return;
  }
  const pad = { left: 38, right: 16, top: 16, bottom: 44 };
  const max = Math.max(...data.map((d) => Number(d.value || d.total || 0)), 1);
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  ctx.strokeStyle = "rgba(148,163,184,.35)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top);
  ctx.lineTo(pad.left, pad.top + chartH);
  ctx.lineTo(width - pad.right, pad.top + chartH);
  ctx.stroke();
  const count = data.length;
  const gap = Math.max(8, Math.min(18, (chartW / count) * 0.18));
  const barW = Math.max(18, (chartW - gap * (count - 1)) / count);
  data.forEach((d, i) => {
    const val = Number(d.value ?? d.total ?? 0);
    const x = pad.left + i * (barW + gap);
    const bh = Math.max(2, (val / max) * (chartH - 10));
    const y = pad.top + chartH - bh;
    const grd = ctx.createLinearGradient(0, y, 0, pad.top + chartH);
    grd.addColorStop(0, "#2563eb");
    grd.addColorStop(1, "#7c3aed");
    ctx.fillStyle = grd;
    ctx.beginPath();
    const r = 8;
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + barW - r, y);
    ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
    ctx.lineTo(x + barW, pad.top + chartH);
    ctx.lineTo(x, pad.top + chartH);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.fill();
    ctx.fillStyle =
      getComputedStyle(document.body).getPropertyValue("--text") || "#0f172a";
    ctx.textAlign = "center";
    const valueLabel = opts.money ? money(val) : String(val);
    ctx.fillText(valueLabel, x + barW / 2, Math.max(12, y - 5));
    ctx.save();
    ctx.translate(x + barW / 2, height - 10);
    ctx.rotate(count > 4 ? -0.45 : 0);
    ctx.fillStyle =
      getComputedStyle(document.body).getPropertyValue("--muted") || "#64748b";
    const label = String(d.label || "").slice(0, 16);
    ctx.fillText(label, 0, 0);
    ctx.restore();
  });
}
function drawChart() {
  drawBarCanvas(
    "salesChart",
    aggregateSalesByDay().map((d) => ({ label: d.label, value: d.total })),
    { money: true, empty: t("noSale") },
  );
  drawBarCanvas("productsChart", aggregateProductsSold(), {
    empty: t("noSale"),
  });
}
function drawReportCharts(sales) {
  drawBarCanvas(
    "reportSalesChart",
    aggregateSalesByDay(sales).map((d) => ({ label: d.label, value: d.total })),
    { money: true, empty: t("noSale") },
  );
  drawBarCanvas("reportProductsChart", aggregateProductsSold(sales), {
    empty: t("noSale"),
  });
}

window.editProduct = (id) => {
  const p = getProduct(id);
  if (!p) return;
  goToSection("produtos");
  $("#productId").value = p.id;
  $("#productName").value = p.name;
  $("#productCategory").value = p.category;
  $("#productPrice").value = p.price;
  $("#productStock").value = p.stock;
  setImagePreview(p.image || "");
  window.scrollTo({ top: 0, behavior: "smooth" });
};
window.delProduct = (id) => {
  db.products = db.products.filter((p) => p.id !== id);
  db.sales = db.sales.filter((s) => s.productId !== id);
  saveDB();
  renderAll();
  toast(t("productDeleted"));
};
window.editClient = (id) => {
  const c = getClient(id);
  if (!c) return;
  goToSection("clientes");
  $("#clientId").value = c.id;
  $("#clientName").value = c.name;
  $("#clientPhone").value = c.phone;
  $("#clientEmail").value = c.email || "";
  window.scrollTo({ top: 0, behavior: "smooth" });
};
window.delClient = (id) => {
  db.clients = db.clients.filter((c) => c.id !== id);
  db.sales = db.sales.filter((s) => s.clientId !== id);
  db.tickets = db.tickets.filter((tk) => tk.clientId !== id);
  saveDB();
  renderAll();
  toast(t("clientDeleted"));
};
window.delSale = (id) => {
  const sale = db.sales.find((s) => s.id === id);
  if (!sale) return;
  const p = getProduct(sale.productId);
  if (p) p.stock = Number(p.stock || 0) + Number(sale.quantity || 0);
  db.sales = db.sales.filter((s) => s.id !== id);
  saveDB();
  renderAll();
  toast(
    currentLang === "en"
      ? "Sale deleted."
      : currentLang === "es"
        ? "Venta eliminada."
        : currentLang === "it"
          ? "Vendita eliminata."
          : "Venda excluída.",
  );
};
window.delTicket = (id) => {
  db.tickets = db.tickets.filter((tk) => tk.id !== id);
  saveDB();
  renderAll();
  toast(
    currentLang === "en"
      ? "Support request deleted."
      : currentLang === "es"
        ? "Atención eliminada."
        : currentLang === "it"
          ? "Assistenza eliminata."
          : "Atendimento excluído.",
  );
};

function goToSection(section) {
  const btn = $(`.nav-link[data-section="${section}"]`);
  if (btn) btn.click();
  $("#searchResults")?.classList.add("hidden");
}
function renderSearchResults(q = currentSearch()) {
  const box = $("#searchResults");
  if (!box) return;
  if (!q) {
    box.classList.add("hidden");
    box.innerHTML = "";
    return;
  }
  const items = [];
  db.products
    .filter((p) => productText(p).includes(q))
    .forEach((p) =>
      items.push({
        section: "produtos",
        type: t("products"),
        title: p.name,
        subtitle: `${p.category} • ${money(p.price)} • ${t("stock")}: ${p.stock}`,
        image: imgSrc(p),
      }),
    );
  db.clients
    .filter((c) => clientText(c).includes(q))
    .forEach((c) =>
      items.push({
        section: "clientes",
        type: t("clients"),
        title: c.name,
        subtitle: `${c.phone} • ${c.email || "-"}`,
        image: "assets/icons/clients.svg",
      }),
    );
  db.sales
    .filter((s) => saleText(s).includes(q))
    .forEach((s) =>
      items.push({
        section: "vendas",
        type: t("sales"),
        title: getProduct(s.productId)?.name || t("removedProduct"),
        subtitle: `${getClient(s.clientId)?.name || t("removedClient")} • ${money(s.total)}`,
        image: "assets/icons/sales.svg",
      }),
    );
  db.tickets
    .filter((tk) => ticketText(tk).includes(q))
    .forEach((tk) =>
      items.push({
        section: "atendimentos",
        type: t("tickets"),
        title: getClient(tk.clientId)?.name || t("removedClient"),
        subtitle: `${tk.channel} • ${tk.status}`,
        image: "assets/icons/tickets.svg",
      }),
    );
  box.classList.remove("hidden");
  box.innerHTML = items.length
    ? items
        .slice(0, 12)
        .map(
          (item) =>
            `<button type="button" class="search-item" data-section="${item.section}"><img src="${item.image}" alt=""><span><strong>${item.title}</strong><span>${item.subtitle}</span></span><em class="search-tag">${item.type}</em></button>`,
        )
        .join("")
    : `<div class="search-empty">${t("noResults")}</div>`;
  box
    .querySelectorAll(".search-item")
    .forEach((btn) => (btn.onclick = () => goToSection(btn.dataset.section)));
}
function formatPhone(v) {
  const d = String(v || "")
    .replace(/\D/g, "")
    .slice(0, 11);
  if (!d) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 3) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3, 7)}-${d.slice(7)}`;
}

function bindEvents() {
  $$(".tab").forEach(
    (btn) =>
      (btn.onclick = () => {
        $$(".tab").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        $("#loginForm").classList.toggle("hidden", btn.dataset.tab !== "login");
        $("#registerForm").classList.toggle(
          "hidden",
          btn.dataset.tab !== "register",
        );
      }),
  );
  $("#loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const u = db.users.find(
      (x) =>
        x.email === $("#loginEmail").value.trim() &&
        x.password === $("#loginPassword").value,
    );
    if (!u) return toast(t("wrongLogin"));
    session = { id: u.id, name: u.name, email: u.email };
    saveSession();
    showApp();
  });
  $("#registerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = $("#registerEmail").value.trim();
    if (db.users.some((u) => u.email === email)) return toast(t("emailExists"));
    const u = {
      id: crypto.randomUUID(),
      name: $("#registerName").value.trim(),
      email,
      password: $("#registerPassword").value,
      provider: "local",
    };
    db.users.push(u);
    saveDB();
    toast(t("accountCreated"));
    $('.tab[data-tab="login"]')?.click();
  });
  $("#googleLogin")?.addEventListener("click", () => {
    const u = {
      id: "google-demo",
      name: "Usuário Google",
      email: "google@demo.com",
      provider: "google-simulado",
    };
    if (!db.users.some((x) => x.id === u.id)) {
      db.users.push({ ...u, password: "" });
      saveDB();
    }
    session = u;
    saveSession();
    toast(t("googleOk"));
    showApp();
  });
  $("#brandHome")?.addEventListener("click", () => {
    goToSection("dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("#logoutBtn")?.addEventListener("click", () => {
    localStorage.removeItem(SESSION_KEY);
    session = null;
    showAuth();
  });
  $("#themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      THEME_KEY,
      document.body.classList.contains("dark") ? "dark" : "light",
    );
  });
  $$(".nav-link").forEach(
    (btn) =>
      (btn.onclick = () => {
        $$(".nav-link").forEach((x) => x.classList.remove("active"));
        btn.classList.add("active");
        $$(".page").forEach((p) => p.classList.remove("active"));
        $("#" + btn.dataset.section)?.classList.add("active");
        updateTitle();
        renderAll();
      }),
  );
  $$("#languageSelect, #authLanguageSelect").forEach((sel) =>
    sel?.addEventListener("change", (e) => {
      currentLang = e.target.value;
      localStorage.setItem(LANG_KEY, currentLang);
      applyTranslations();
      renderAll();
    }),
  );
  $("#globalSearch")?.addEventListener("input", () => renderAll());
  $("#globalSearch")?.addEventListener("focus", () => renderSearchResults());
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-box"))
      $("#searchResults")?.classList.add("hidden");
  });
  $("#productImage")?.addEventListener("change", async (e) => {
    try {
      setImagePreview(await readImageFile(e.target.files[0]));
    } catch (err) {
      e.target.value = "";
      setImagePreview("");
      toast(err.message);
    }
  });
  $("#removeProductImage")?.addEventListener("click", () => {
    $("#productImage").value = "";
    setImagePreview("");
  });
  $("#clearProduct")?.addEventListener("click", () => setImagePreview(""));
  $("#clearClient")?.addEventListener("click", () => {
    if ($("#clientId")) $("#clientId").value = "";
  });
  $("#clearSale")?.addEventListener("click", () =>
    setTimeout(ensureSaleDate, 0),
  );
  $("#clearTicket")?.addEventListener("click", () =>
    setTimeout(() => fillSelects(), 0),
  );
  $("#productForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = $("#productId").value;
    const current = id ? getProduct(id) : null;
    const data = {
      id: id || crypto.randomUUID(),
      name: $("#productName").value.trim(),
      category: $("#productCategory").value.trim(),
      price: Number($("#productPrice").value),
      stock: Number($("#productStock").value),
      image: selectedProductImage || current?.image || "",
    };
    if (id) Object.assign(current, data);
    else db.products.push(data);
    if (saveDB()) {
      resetProductForm();
      renderAll();
      toast(t("productSaved"));
    }
  });
  $("#clientPhone")?.addEventListener(
    "input",
    (e) => (e.target.value = formatPhone(e.target.value)),
  );
  $("#clientPhone")?.setAttribute("placeholder", "(XX) X XXXX-XXXX");
  $("#clientForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = $("#clientId").value;
    const data = {
      id: id || crypto.randomUUID(),
      name: $("#clientName").value.trim(),
      phone: formatPhone($("#clientPhone").value),
      email: $("#clientEmail").value.trim(),
    };
    if (id) Object.assign(getClient(id), data);
    else db.clients.push(data);
    if (saveDB()) {
      $("#clientForm").reset();
      $("#clientId").value = "";
      renderAll();
      toast(t("clientSaved"));
    }
  });
  $("#saleForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const p = getProduct($("#saleProduct").value);
    const c = getClient($("#saleClient").value);
    const qty = Number($("#saleQuantity").value);
    if (!p || !c || qty < 1) return;
    if (p.stock < qty) return toast(t("notEnoughStock"));
    const saleDate = $("#saleDate")?.value
      ? new Date($("#saleDate").value + "T12:00:00").toISOString()
      : new Date().toISOString();
    p.stock -= qty;
    db.sales.push({
      id: crypto.randomUUID(),
      clientId: c.id,
      productId: p.id,
      quantity: qty,
      total: p.price * qty,
      date: saleDate,
    });
    if (saveDB()) {
      $("#saleForm").reset();
      $("#saleQuantity").value = 1;
      ensureSaleDate();
      renderAll();
      toast(t("saleSaved"));
    }
  });
  $("#ticketForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const c = getClient($("#ticketClient").value);
    if (!c) return;
    db.tickets.push({
      id: crypto.randomUUID(),
      clientId: c.id,
      channel: $("#ticketChannel").value,
      status: $("#ticketStatus").value,
      note: $("#ticketNote").value.trim(),
      date: new Date().toISOString(),
    });
    if (saveDB()) {
      $("#ticketForm").reset();
      renderAll();
      toast(t("ticketSaved"));
    }
  });
  $("#generateReport")?.addEventListener("click", () => renderReport(true));
  $("#printReport")?.addEventListener("click", () => {
    renderReport(false);
    document.body.classList.add("printing-report");
    setTimeout(() => window.print(), 80);
    setTimeout(() => document.body.classList.remove("printing-report"), 700);
  });
  let lastY = window.scrollY;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    document.body.classList.toggle("nav-hidden", y > lastY && y > 80);
    lastY = y;
  });
  $("#navHotspot")?.addEventListener("mouseenter", () =>
    document.body.classList.remove("nav-hidden"),
  );
  $("#navHotspot")?.addEventListener("mousemove", () =>
    document.body.classList.remove("nav-hidden"),
  );
  $(".sidebar")?.addEventListener("mouseenter", () =>
    document.body.classList.add("force-nav"),
  );
  $(".sidebar")?.addEventListener("mouseleave", () =>
    document.body.classList.remove("force-nav"),
  );
  window.addEventListener("resize", () => {
    drawChart();
    renderReport(false);
  });
  ensureSaleDate();
}

seed();
if (localStorage.getItem(THEME_KEY) === "dark")
  document.body.classList.add("dark");
bindEvents();
applyTranslations();
if (session) showApp();
else showAuth();