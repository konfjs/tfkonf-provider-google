import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeKeystoresAliasesPkcs12ArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApigeeKeystoresAliasesPkcs12Args {
  alias: string;
  environment: string;
  file: string;
  filehash: string;
  keystore: string;
  org_id: string;
  timeouts?: GoogleApigeeKeystoresAliasesPkcs12ArgsTimeouts;
}

export class google_apigee_keystores_aliases_pkcs12 extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeKeystoresAliasesPkcs12Args) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_keystores_aliases_pkcs12", resourceName);
  }

  get alias(): string {
    return `${this.resourceType}.${this.resourceName}.alias`;
  }

  get certs_info(): string {
    return `${this.resourceType}.${this.resourceName}.certs_info`;
  }

  get environment(): string {
    return `${this.resourceType}.${this.resourceName}.environment`;
  }

  get file(): string {
    return `${this.resourceType}.${this.resourceName}.file`;
  }

  get filehash(): string {
    return `${this.resourceType}.${this.resourceName}.filehash`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get keystore(): string {
    return `${this.resourceType}.${this.resourceName}.keystore`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get password(): string {
    return `${this.resourceType}.${this.resourceName}.password`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
