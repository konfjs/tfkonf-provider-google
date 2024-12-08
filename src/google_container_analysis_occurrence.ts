import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerAnalysisOccurrenceArgsAttestationSignatures {
  public_key_id: string;
  signature?: string;
}

export interface GoogleContainerAnalysisOccurrenceArgsAttestation {
  serialized_payload: string;
  signatures: GoogleContainerAnalysisOccurrenceArgsAttestationSignatures[];
}

export interface GoogleContainerAnalysisOccurrenceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleContainerAnalysisOccurrenceArgs {
  note_name: string;
  remediation?: string;
  resource_uri: string;
  attestation: GoogleContainerAnalysisOccurrenceArgsAttestation;
  timeouts?: GoogleContainerAnalysisOccurrenceArgsTimeouts;
}

export class google_container_analysis_occurrence extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleContainerAnalysisOccurrenceArgs) {
    const meta = {attestation:{isBlock:true,signatures:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_container_analysis_occurrence", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kind(): string {
    return `${this.resourceType}.${this.resourceName}.kind`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get note_name(): string {
    return `${this.resourceType}.${this.resourceName}.note_name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get resource_uri(): string {
    return `${this.resourceType}.${this.resourceName}.resource_uri`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
