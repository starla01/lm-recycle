import React, { Component } from 'react';
import $ from 'jQuery';

export default class Riesgos extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="riesgos" className="riesgos">
                  <div className="list">
					  <div className="rowTitle">
						  <div className="c1 f">Ley / Norma</div>
						  <div className="c2 f">Entidad Regulatoria</div>
						  <div className="c3 f">Articulo /Punto</div>
						  <div className="c4 f">Texto</div>
						  <div className="c5 f">Obligaciones y Riesgos / Penas</div>
					  </div>

					  <div className="rowData">
						  <div className="c1 f">Ley General para La Gestión Integral de Residuos (LGPGIR)</div>
						  <div className="c2 f">PROFEPA</div>
						  <div className="c3 f">19, VIII</div>
						  <div className="c4 f">Define al residuo tecnológico (electrónico) como un Residuo de Manejo Especial (RME) sujeto a un Plan de manejo.</div>
						  <div className="c5 f">Obligación – Llevar un plan de manejo de residuos, INCLUYENDO, aquellos residuos de manejo especial.
												Riesgo / Pena – El no contar con un plan de manejo de residuos expone a la empresa ante la PROFEPA como:
												- Delito Federal
												- Multas acorde a los daños ambientales y sociales provocados - Privación de la libertad.</div>
					  </div>

					  <div className="rowData">
						  <div className="c1 f">Ley General del Equilibrio Ecológico y Protección al Ambiente (LGEEPA)</div>
						  <div className="c2 f">PROFEPA</div>
						  <div className="c3 f">134, III</div>
						  <div className="c4 f">Define las condiciones y criterios para el establecimiento de programas ambientales para la prevención y control de la contaminación del suelo.</div>
						  <div className="c5 f">Obligación – Elaborar y ejecutar un programa ambiental para aquellos residuos que representen un riesgo en la contaminación del suelo.
						  						Riesgo / Pena – El no contar con un programa ambiental expone a la empresa ante la PROFEPA como:
						  						- Delito Federal,
						  						- Multas acorde a los daños ambientales y
						  						sociales provocados. - Privación de libertad.</div>
					  </div>
					  <div className="rowData">
						  <div className="c1 f"></div>
						  <div className="c2 f">PROFEPA</div>
						  <div className="c3 f">150, III</div>
						  <div className="c4 f">Se establece el manejo de los Materiales y Residuos Peligrosos y se delega la autoridad legal a los Reglamentos y Normas Mexicanas para establecer los criterios para su clasificación, empaque y tratamiento.</div>
						  <div className="c5 f">Obligación – Acotarse a los criterios establecidos en los Reglamentos y Normas Mexicanas relacionados con los Materiales y Residuos Peligrosos.
												Riesgo / Pena – El no apegarse a los criterios para la clasificación, empaque y tratamiento de residuo / materiales peligrosos establecidos en los Reglamentos y Normas Mexicanas expone a la empresa ante la PROFEPA como:
												- Delito Federal
												- Multas acorde a los daños ambientales y sociales provocados, - Privación de libertad.</div>
					  </div>

					  <div className="rowData">
						  <div className="c1 f">REGLAMENTO LGPGIR</div>
						  <div className="c2 f">PROFEPA</div>
						  <div className="c3 f">Articulo 1</div>
						  <div className="c4 f">El presente ordenamiento tiene por objeto reglamentar la Ley General para la Prevención y Gestión Integral de los Residuos y rige en todo el territorio nacional y las zonas donde la Nación ejerce su jurisdicción y su aplicación corresponde al Ejecutivo Federal, en específico a los RESIDUOS PELIGROSOS.</div>
						  <div className="c5 f">Obligación – Acotarse a los criterios establecidos para el almacenamiento, liberación y disposición de residuos peligrosos. Riesgo / Pena – El incumplimiento en los criterios de disposición de residuos peligrosos establecidos en el Reglamento expone a la empresa ante la PROFEPA en:
												- Delito Federal
												- Multas acorde a los daños ambientales y sociales provocados, - Privación de libertad.</div>
					  </div>
					  <div className="rowData">
						  <div className="c1 f">NOM 052</div>
						  <div className="c2 f">PROFEPA</div>
						  <div className="c3 f"></div>
						  <div className="c4 f">Tiene como principal objetivo el establecimiento del procedimiento para la identificación de los residuos peligrosos y las características que hacen que se consideren como tales.</div>
						  <div className="c5 f">Obligación – Acotarse a los procedimientos de identificación, clasificación y disposición de sus
												residuos peligrosos y las características que hacen que se consideren como tales.
												- Riesgo / Pena – Se expone a la empresa ante la - Delito Federal,
												- Multas acorde a los daños ambientales y
												sociales provocados, - Privación de libertad.</div>
					  </div>

					  <div className="rowData">
						  <div className="c1 f">NOM 161</div>
						  <div className="c2 f">PROFEPA</div>
						  <div className="c3 f"></div>
						  <div className="c4 f">Establece los criterios para
												clasificar a los residuos de manejo
												especial y determinar cuáles están
												sujetos a plan de manejo;
												El listado de los mismos, el procedimiento para la inclusión o exclusión ha dicho listado;
												Así como los elementos y procedimientos para la formulación de los planes de manejo.</div>
						  <div className="c5 f">Obligación – Definir y presentar un plan de manejo para los residuos de equipos electrónicos y eléctricos. Clasificando los materiales de aprovechamiento y los residuos de disposición. Riesgo / Pena – Se expone a la empresa ante la
												PROFEPA como:
												- Delito Federal,
												- Multas acorde a los daños ambientales y sociales provocados, - Privación de libertad.</div>
					  </div>
					  <div className="rowData">
						  <div className="c1 f">Ley Federal de Protección de Datos Personales En Posesión de Los Particulares (LFPDPP)</div>
						  <div className="c2 f">Instituto Federal
												de Acceso a la Información y Protección de Datos (IFAI)</div>
						  <div className="c3 f">Artículo 64</div>
						  <div className="c4 f">La presente Ley es de orden público y de observancia general en toda la República y tiene por objeto la protección de los datos personales en posesión de los particulares, con la finalidad de regular su tratamiento Legítimo, controlado e informado, a efecto de garantizar la privacidad y el derecho a la autodeterminación informativa de las personas.</div>
						  <div className="c5 f">Obligación – La protección de TODOS los datos de información personales.
												Riesgo / Pena – Se expone a la empresa ante el IFAI :
												- Delito Federal,
												- Multas acorde a los daños ambientales y sociales provocados, - Privación de libertad.</div>
					  </div>

					  <div className="rowData">
						  <div className="c1 f">Reglamento de la Ley Federal de Protección de Datos Personales en Posesión de Los Particulares (RLFPDPP)</div>
						  <div className="c2 f">Instituto Federal
												de Acceso a la Información y Protección de Datos (IFAI)</div>
						  <div className="c3 f">Artículo 64</div>
						  <div className="c4 f">El presente ordenamiento tiene por objeto reglamentar las disposiciones de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
												Se definen:
												- Entorno Digital (hardware, software, redes, aplicaciones, servicios)
												- Medidas de Seguridad
												- Garantías
												- Soporte y evidencias.</div>
						  <div className="c5 f">Obligación – La protección de TODOS los datos de información personal es en base a lo establecido en el reglamento.
												Riesgo / Pena – Se expone a la empresa ante el IFAI:
												- Delito Federal,
												- Multas acorde a los daños ambientales y sociales provocados, - Privación de libertad.</div>
					  </div>
					  
				  </div>
			</div>
		)
	}
}
