import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerAnalysisNoteArgsAttestationAuthorityHint {
  human_readable_name: string;
}

export interface GoogleContainerAnalysisNoteArgsAttestationAuthority {
  hint: GoogleContainerAnalysisNoteArgsAttestationAuthorityHint;
}

export interface GoogleContainerAnalysisNoteArgsRelatedUrl {
  label?: string;
  url: string;
}

export interface GoogleContainerAnalysisNoteArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleContainerAnalysisNoteArgs {
  expiration_time?: string;
  long_description?: string;
  name: string;
  related_note_names?: string[];
  short_description?: string;
  attestation_authority: GoogleContainerAnalysisNoteArgsAttestationAuthority;
  related_url?: GoogleContainerAnalysisNoteArgsRelatedUrl[];
  timeouts?: GoogleContainerAnalysisNoteArgsTimeouts;
}

export class google_container_analysis_note extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleContainerAnalysisNoteArgs) {
    const meta = {attestation_authority:{isBlock:true,hint:{isBlock:true}},related_url:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_container_analysis_note", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
