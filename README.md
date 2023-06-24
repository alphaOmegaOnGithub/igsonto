# Developing an ontology on information governance using description logic

Background:  Every enterprise is obliged to implement an information lifecycle based on a information governance (IG) model that ensures information compliance with corporate governance policies and more importantly with legal regulations. A major impediment to implementation and interoperability is the lack of a common language, one that defines what information governance consists of in technical and operational terms. In addition, the many existing frameworks in this domain make the exploitation of the available knowledge and definition of standardized IG specific services difficult, often leading to costly one-off implementations. A possible solution to this problem is the availability of a common and unambiguous domain vocabulary as a pre-requisite to a commonly accepted ontology on information governance. 

Goal: This work aims at the definition of an ontology-based framework (IGONTO) that supports the creation and management of an ontology on information governance (sematic schema) and a knowledge store (sematic graph) that facilitates access of domain knowledge through semantic search. 

Approach: An ontology consists of a vocabulary terms (concept classes), properties, relationships and individuals representing the knowledge of a specific domain, expressed through description logic. In our case the domain is information governance with a defined focus on design and implementation concepts. A knowledge graph represents a knowledge database that can be search by humans and applications through SPAQL queries allowing an automated transfer of domain knowledge from application to application (a-a) or application to human (a-h). 
Tooling: For this work the tools set to use is; protégé as the authoring tool, Allegro-Graph the triple store, Allegro-Gruff the Graph-UI, Alfresco the artefact repository. Use the AS-Gitlab project “ https://gitlab-as.informatik.uni-stuttgart.de/as/devotigdl” to capture source code developed, progress and to document lessons learned.

Expected results:

Master Thesis Deliverables

Part I:  Problem analysis and concept design. 
To dos:
1.	Familiarize yourself with the topic on information governance from a conceptual standpoint.  Gather the relevant IG vocabulary terms, extrapolate their properties and relationships from the GPDR regulation. See list of literature provided.
2.	Familiarize yourself with the knowledge development tools mentioned before.  
3.	Sketch out the semantic model and the required design artefacts. 
4.	Consolidate the documentation so far and present your intermediate results.

Part II: During the second part of the thesis you perform a prototype implementation as planned using the tools and the framework that you did setup before. 


•	Create the IG Graph and verify that questions like “Q1: My firm has business offices in Germany and deals with customer PII data, contracts and context information, what are the IG regulation we have to comply with ?”  performed through SPARQL like this: 
 
returns meaningful results.

•	 Consolidate the documentation so far and present your intermediate results

Part III:
•	Consolidate documentation you have developed so far, explaining the approach you used and the results produced.    
•	Evaluate the results and flexibility to integrate the framework into an existing enterprise information governance environment and show the benefits for companies in using the IGONTO framework.
•	Prepare a final presentation and explanation of the final results

Please familiarize yourself with the current IGONTO framework and semantic model as described in the following related work.


