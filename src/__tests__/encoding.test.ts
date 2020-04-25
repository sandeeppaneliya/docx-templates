/* eslint-env jest */

import path from 'path';
import fs from 'fs';
import { createReport } from '../index';

it('001: Issue #100 Spanish characters in HTML', async () => {
  const template = await fs.promises.readFile(
    path.join(__dirname, 'fixtures', 'htmlEncoding.docx')
  );

  const opts = {
    template,
    data: {
      text:
        '<p>Una evaluación anual de riesgos de seguridad es, por lejos, la práctica de seguridad más valiosa que una instalación puede implementar. Existen muchos marcos de evaluación de riesgos efectivos disponibles, como el Análisis modal de fallos y efectos (Failure Modes and Effects Analysis, FMEA), la Evaluación de amenazas, activos y vulnerabilidades operacionalmente críticas (Operationally Critical Threat, Asset and Vulnerability Evaluation, OCTAVE) o el Margo de gestión de riesgos (Risk Management Framework, RMF) del Instituto Nacional de Estándares y Tecnología (National Institute of Standards and Technology, NIST). Independientemente del marco que se utilice, cada evaluación de riesgos debe tener los siguientes pasos:</p><ol><li>Definir los activos</li><li>Definir los riesgos para esos activos</li><li>Definir las amenazas a esos riesgos</li><li>Definir el impacto de esas amenazas</li><li>Definir la probabilidad de esas amenazas</li><li>Definir las mitigaciones a esas amenazas</li><li>Definir el impacto residual y la probabilidad después de esas mitigaciones</li></ol>',
    },
  };

  //   TODO: REMOVEME
  fs.writeFileSync('test.docx', await createReport(opts));
  expect(true).toBe(true);
});
