import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBinaryAuthorizationAttestorArgsAttestationAuthorityNotePublicKeysPkixPublicKey {
  public_key_pem?: string;
  signature_algorithm?: string;
}

export interface GoogleBinaryAuthorizationAttestorArgsAttestationAuthorityNotePublicKeys {
  ascii_armored_pgp_public_key?: string;
  comment?: string;
  pkix_public_key?: GoogleBinaryAuthorizationAttestorArgsAttestationAuthorityNotePublicKeysPkixPublicKey;
}

export interface GoogleBinaryAuthorizationAttestorArgsAttestationAuthorityNote {
  note_reference: string;
  public_keys?: GoogleBinaryAuthorizationAttestorArgsAttestationAuthorityNotePublicKeys[];
}

export interface GoogleBinaryAuthorizationAttestorArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBinaryAuthorizationAttestorArgs {
  description?: string;
  name: string;
  attestation_authority_note: GoogleBinaryAuthorizationAttestorArgsAttestationAuthorityNote;
  timeouts?: GoogleBinaryAuthorizationAttestorArgsTimeouts;
}

export class google_binary_authorization_attestor extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBinaryAuthorizationAttestorArgs) {
    const meta = {attestation_authority_note:{isBlock:true,public_keys:{isBlock:true,pkix_public_key:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_binary_authorization_attestor", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
