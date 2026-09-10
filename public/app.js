// Dados dos cursos
const courses = [
  {
    id: 1,
    name: 'JavaScript Avançado',
    description: 'Domine JavaScript moderno, assincronismo e padrões de design',
    price: 99.90,
    icon: '💻',
    level: 'Avançado'
  },
  {
    id: 2,
    name: 'React do Zero',
    description: 'Aprenda React, Hooks e construa aplicações escaláveis',
    price: 129.90,
    icon: '⚛️',
    level: 'Intermediário'
  },
  {
    id: 3,
    name: 'Node.js Backend',
    description: 'Desenvolva APIs robustas e escaláveis com Node.js',
    price: 119.90,
    icon: '🚀',
    level: 'Intermediário'
  },
  {
    id: 4,
    name: 'Web Design Moderno',
    description: 'Design responsivo, UX/UI e prototipagem profissional',
    price: 89.90,
    icon: '🎨',
    level: 'Iniciante'
  },
  {
    id: 5,
    name: 'Banco de Dados SQL',
    description: 'SQL, MySQL, PostgreSQL e otimização de queries',
    price: 109.90,
    icon: '🗄️',
    level: 'Intermediário'
  },
  {
    id: 6,
    name: 'Python para Iniciantes',
    description: 'Introdução a Python, estruturas de dados e programação',
    price: 79.90,
    icon: '🐍',
    level: 'Iniciante'
  }
];

// Inicializar Stripe
const stripe = Stripe('pk_test_YOUR_STRIPE_PUBLIC_KEY');

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
          <button class="btn btn-primary" onclick="checkout(${course.id}, '${course.name}', ${course.price})">
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Função de checkout com validação
async function checkout(courseId, courseName, price) {
  const email = prompt('Digite seu email:');
  if (!email || !email.includes('@')) {
    alert('Por favor, digite um email válido');
    return;
  }

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
      const result = await stripe.redirectToCheckout({ sessionId: session.id });
      
      if (result.error) {
        alert('Erro: ' + result.error.message);
      }
    } else {
      alert('Erro ao criar sessão de checkout');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao processar checkout. Tente novamente.');
  }
}

// Renderizar cursos quando a página carregar
window.addEventListener('DOMContentLoaded', () => {
  renderCourses();
});
