import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGooglePrivatecaCertificateAuthorityArgs {
  certificate_authority_id?: string;
  location?: string;
  pool?: string;
  project?: string;
}

export class data_google_privateca_certificate_authority extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGooglePrivatecaCertificateAuthorityArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_privateca_certificate_authority", resourceName);
  }

  get access_urls(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_urls`;
  }

  get config(): string {
    return `data.${this.resourceType}.${this.resourceName}.config`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get deletion_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get desired_state(): string {
    return `data.${this.resourceType}.${this.resourceName}.desired_state`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get gcs_bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.gcs_bucket`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ignore_active_certificates_on_deletion(): string {
    return `data.${this.resourceType}.${this.resourceName}.ignore_active_certificates_on_deletion`;
  }

  get key_spec(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_spec`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get lifetime(): string {
    return `data.${this.resourceType}.${this.resourceName}.lifetime`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get pem_ca_certificate(): string {
    return `data.${this.resourceType}.${this.resourceName}.pem_ca_certificate`;
  }

  get pem_ca_certificates(): string {
    return `data.${this.resourceType}.${this.resourceName}.pem_ca_certificates`;
  }

  get pem_csr(): string {
    return `data.${this.resourceType}.${this.resourceName}.pem_csr`;
  }

  get skip_grace_period(): string {
    return `data.${this.resourceType}.${this.resourceName}.skip_grace_period`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get subordinate_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.subordinate_config`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
