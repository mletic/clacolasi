export type LanguageTemplates = {
  [key: string]: LanguageTemplate;
};
export type LanguageTemplate = {
  buttons: {
    showOnMap: string;
    selectLanguage: string;
  };
  sections: Section[];
};
export type Section = {
  title: string;
  description: string;
  subsections: Subsection[];
};
export type Subsection = {
  title: string;
  description: string;
  files: string[];
};

export const languageTemplates: LanguageTemplates = {
  gb: {
    buttons: {
      showOnMap: 'Show on map',
      selectLanguage: 'Select language'
    },
    sections: [
      {
        title: 'Complement size',
        description: 'This is a description of the section',
        subsections: [
          {
            title: 'TRY',
            description: 'This is a description of the subsection',
            files: ['data-try-inf', 'data-try-dpc']
          },
          {
            title: 'DECIDE',
            description: 'This is a description of the subsection',
            files: ['data-decide-inf', 'data-decide-dpc']
          }
        ]
      },
      {
        title: 'Modality',
        description: 'This is a description of the section',
        subsections: [
          {
            title: 'DENOTIC',
            description: 'This is a description of the subsection',
            files: ['data-denotic-inf', 'data-denotic-dpc']
          },
          {
            title: 'EPISTEMIC',
            description: 'This is a description of the subsection',
            files: ['data-epistemic-inf', 'data-epistemic-dpc']
          },
          {
            title: 'CIRCUMSTANTIAL',
            description: 'This is a description of the subsection',
            files: ['data-circumstantial-inf', 'data-circumstantial-dpc']
          }
        ]
      },
      {
        title: 'Aspectual verb',
        description: 'This is a description of the section',
        subsections: [
          {
            title: 'BEGIN',
            description: 'This is a description of the subsection',
            files: ['data-begin-inf', 'data-begin-dpc']
          },
          {
            title: 'STOP',
            description: 'This is a description of the subsection',
            files: ['data-stop-inf', 'data-stop-dpc']
          }
        ]
      }
    ]
  },
  rs: {
    buttons: {
      showOnMap: 'Prikaži na mapi',
      selectLanguage: 'Izaberite jezik'
    },
    sections: [
      {
        title: 'Veličina komplementa',
        description: 'Ovo je opis sekcije',
        subsections: [
          {
            title: 'POKUŠATI',
            description: 'Ovo je opis podsekcije',
            files: ['data-try-inf', 'data-try-dpc']
          },
          {
            title: 'ODLUČITI',
            description: 'Ovo je opis podsekcije',
            files: ['data-decide-inf', 'data-decide-dpc']
          }
        ]
      },
      {
        title: 'Modalnost',
        description: 'Ovo je opis sekcije',
        subsections: [
          {
            title: 'DENOTIČKO',
            description: 'Ovo je opis podsekcije',
            files: ['data-denotic-inf', 'data-denotic-dpc']
          },
          {
            title: 'EPISTEMIČKO',
            description: 'Ovo je opis podsekcije',
            files: ['data-epistemic-inf', 'data-epistemic-dpc']
          },
          {
            title: 'CIRKUMSTANCIJALNO',
            description: 'Ovo je opis podsekcije',
            files: ['data-circumstantial-inf', 'data-circumstantial-dpc']
          }
        ]
      },
      {
        title: 'Aspektualni glagol',
        description: 'Ovo je opis sekcije',
        subsections: [
          {
            title: 'POČETI',
            description: 'Ovo je opis podsekcije',
            files: ['data-begin-inf', 'data-begin-dpc']
          },
          {
            title: 'PRESTATI',
            description: 'Ovo je opis podsekcije',
            files: ['data-stop-inf', 'data-stop-dpc']
          }
        ]
      }
    ]
  }
};
