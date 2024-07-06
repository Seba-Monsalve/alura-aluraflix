
export const inputs = [
    {
        id: 'titulo',
        name: 'Titulo',
        type: 'text',
        placeholder: '¿Que titulo quieres ingresar?'
    },
    {
        id: 'categoria',
        name: 'Categoria',
        type: 'dropdown',
        placeholder: '',
        options: [
            'Frontend',
            'Backend',
            'Innovación y Gestión',
        ]
    },
    {
        id: 'imagen',
        name: 'Imagen',
        type: 'text',
        placeholder: 'Ingresa tu imagen'
    },
    {
        id: 'video',
        name: 'Video',
        type: 'text',
        placeholder: 'https://www.youtube.com/watch?v=_nLmM9kcBKs'
    },
    {
        id: 'descripcion',
        name: 'Descripcion',
        type: 'textarea',
        placeholder: 'Una breve descripcion del video'
    },
    {
        type: 'submit',
    }, {
        type: 'reset',
    }
]