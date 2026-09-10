// Dados dos cursos (em produção, viria de um banco de dados)
const courses = [
  {
    id: 1,
    name: 'JavaScript Avançado',
    description: 'Domine JavaScript e crie aplicações web modernas',
    price: 99.90,
    icon: '💻'
  },
  {
    id: 2,
    name: 'React do Zero',
    description: 'Aprenda React e construa SPAs incríveis',
    price: 129.90,
    icon: '⚛️'
  },
  {
    id: 3,
    name: 'Node.js Backend',
    description: 'Crie APIs robustas com Node.js e Express',
    price: 119.90,
    icon: '🚀'
  },
  {
    id: 4,
    name: 'Web Design Completo',
    description: 'Design responsivo e UX/UI para web',
    price: 89.90,
    icon: '🎨'
  },
  {
    id: 5,
    name: 'Banco de Dados SQL',
    description: 'SQL, MySQL e PostgreSQL na prática',
    price: 109.90,
    icon: '🗄️'
  },
  {
    id: 6,
    name: 'Python para Iniciantes',
    description: 'Comece sua jornada com Python',
    price: 79.90,
    icon: '🐍'
  }
];

// Inicializar Stripe
const stripe = Stripe('pk_test_YOUR_STRIPE_PUBLIC_KEY'); // Substitua com sua chave pública

// Renderizar cursos na página
function renderCourses() {
  const coursesGrid = document.getElementById('coursesGrid');
  coursesGrid.innerHTML = courses.map(course => `
    <div class="course-card">
      <div class="course-image">${course.icon}</div>
      <div class="course-content">
        <h3 class="course-title">${course.name}</h3>
        <p class="course-description">${course.description}</p>
        <div class="course-price">R$ ${course.price.toFixed(2)}</div>
        <div class="course-footer">
          <button class="btn btn-primary" style="flex: 1;" onclick="checkout(${course.id}, '${course.name}', ${course.price})">
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Função de checkout
async function checkout(courseId, courseName, price) {
  const email = prompt('Digite seu email:');
  if (!email) return;

  try {
    const response = await fetch('/api/checkout/create-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseId,
        courseName,
        price,
        userEmail: email
      })
    });

    const session = await response.json();

    if (session.id) {
      // Redirecionar para o Stripe Checkout
      const result = await stripe.redirectToCheckout({ sessionId: session.id });
      
      if (result.error) {
        alert('Erro: ' + result.error.message);
      }
    } else {
      alert('Erro ao criar sessão de checkout');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao processar checkout');
  }
}

// Renderizar cursos quando a página carregar
window.addEventListener('DOMContentLoaded', () => {
  renderCourses();
});
