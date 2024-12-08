import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeKeystoresAliasesKeyCertFileArgsCertsInfoCertInfo {
}

export interface GoogleApigeeKeystoresAliasesKeyCertFileArgsCertsInfo {
  cert_info?: GoogleApigeeKeystoresAliasesKeyCertFileArgsCertsInfoCertInfo[];
}

export interface GoogleApigeeKeystoresAliasesKeyCertFileArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface GoogleApigeeKeystoresAliasesKeyCertFileArgs {
  alias: string;
  cert: string;
  environment: string;
  key?: string;
  keystore: string;
  org_id: string;
  password?: string;
  certs_info?: GoogleApigeeKeystoresAliasesKeyCertFileArgsCertsInfo;
  timeouts?: GoogleApigeeKeystoresAliasesKeyCertFileArgsTimeouts;
}

export class google_apigee_keystores_aliases_key_cert_file extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeKeystoresAliasesKeyCertFileArgs) {
    const meta = {certs_info:{isBlock:true,cert_info:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_keystores_aliases_key_cert_file", resourceName);
  }

  get alias(): string {
    return `${this.resourceType}.${this.resourceName}.alias`;
  }

  get cert(): string {
    return `${this.resourceType}.${this.resourceName}.cert`;
  }

  get environment(): string {
    return `${this.resourceType}.${this.resourceName}.environment`;
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

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
