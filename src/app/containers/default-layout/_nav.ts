import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },

  {
    title: true,
    name: 'Gestions des utilisateurs',
  },

  {
    name: 'Utilisateurs',
    url: '/utilisateurs',
    iconComponent: { name: 'cil-user' },

    children: [
      {
        name: 'Ajouter un utilisateur',
        url: '/utilisateurs/ajouter-utilisateurs',
      },
      {
        name: 'Lister les projets',
        url: '/utilisateurs/liste-utilisateurs',
      },
    ],
    // children: [
    //   {
    //     name: 'Ajouter un utilisateur',
    //     url: 'utilisateurs/ajout-utilisateurs',
    //   },
    //   {
    //     name: 'Lister les utilisateurs',
    //     url: '/utilisateurs/liste-utilisateurs',
    //   },

    // ],
  },

  {
    title: true,
    name: 'Gestions des Projets',
  },
  {
    name: 'Projets',
    url: '/projets',
    iconComponent: { name: 'cil-file' },
    children: [
      {
        name: 'Ajouter un projet',
        url: '/projets/ajout-projet',
      },
      {
        name: 'Lister les projets',
        url: '/projets/liste-projets',
      },
    ],
  },
  {
    title: true,
    name: 'Gestions des sondages',
  },

  {
    name: 'Sondages',
    url: '/sondages',
    iconComponent: { name: 'cil-chart' },
    children: [
      {
        name: 'Ajouter un sondage',
        url: '/sondages/ajouter-sondage',
      },
      {
        name: 'Lister les sondages',
        url: '/sondages/liste-sondages',
      },
      {
        name: 'Mes sondages',
        url: '/sondages/mes-sondages',
      },
      {
        name: 'Mes sondages',
        url: '/sondages/maj-sondage',
      },
    ],
  },
  {
    title: true,
    name: 'Gestions des informations',
  },
  {
    name: 'Informations',
    iconComponent: { name: 'cil-notes' },
    url: '/informations',
    children: [
      {
        name: 'Ajouter une information',
        url: '/informations/ajouter-information',
      },
      {
        name: 'Lister les informations',
        url: '/informations/liste-informations',
      },
    ],
  },
  {
    name: "Propositions d'idée",
    url: '/propositions-idees',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Lister les idées',
        url: '/propositions-idees/liste-idees',
      },
      {
        name: 'liste des idées signalées',
        url: '/propositions-idees/liste-idees-signalees',
      },
    ],
  },

  {
    title: true,
    name: 'Gestions des problèmes',
  },
  {
    name: 'Problèmes',
    url: '/problemes',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Liste des problèmes',
        url: '/problemes/liste-problemes',
      },
    ],
  },

  {
    title: true,
    name: 'Gestions de la collecte',
  },

  {
    name: 'Collectes de fonds',
    url: '/collecte',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Liste des collectes',
        url: '/collecte/liste-collectes',
      },
    ],
  },
  {
    title: true,
    name: 'Gestions de la carte',
  },

  {
    name: 'Cartes',
    url: '/carte',
    iconComponent: { name: 'cil-map' },
    children: [
      {
        name: "S'identifier",
        url: '/carte/evaluation-lieu',
      },
      {
        name: 'Evaluer un lieu',
        url: '/carte/identification',
      },
    ],
  },

  {
    title: true,
    name: 'Services Administratifs',
  },
  //Naissance
  {
    name: 'Acte de naissance',
    url: '/acte-naissance',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Ajouter une demarche',
        url: 'services-administratifs/ajouter-demarche',
      },
      {
        name: 'Liste des demarches',
        url: 'services-administratifs/liste-demandes-naissance',
      },
    ],
  },

  //legalisations
  {
    name: 'Légalisations ',
    url: '/legislations',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Ajouter une demarche',
        url: 'services-administratifs/ajouter-demarche',
      },
      {
        name: 'Liste des demarches',
        url: 'services-administratifs/liste-demandes-legalisation',
      },
    ],
  },

  //Décès
  {
    name: 'Actes de décès ',
    url: '/acte-deces',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Ajouter une demarche',
        url: 'services-administratifs/ajout-demarche',
      },
      {
        name: 'Liste des demandes',
        url: 'services-administratifs/liste-demandes',
      },
    ],
  },
];
